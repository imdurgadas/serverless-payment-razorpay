const crypto = require('crypto');
const querystring = require('querystring');
const { razorPaySecret, redirectUrl } = require('../utils/helper');
const { Base64 } = require('js-base64');

module.exports.handler = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  console.log(event.body);

  let data;
  if (Base64.isValid(event.body)) {
    data = querystring.parse(Base64.decode(event.body));
  } else {
    data = querystring.parse(event.body);
  }
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = data;

  const verifyBody = razorpay_order_id + '|' + razorpay_payment_id;

  var expectedSignature = crypto
    .createHmac('sha256', razorPaySecret)
    .update(verifyBody.toString())
    .digest('hex');

  if (expectedSignature === razorpay_signature) {
    callback(null, {
      statusCode: 302,
      headers: {
        Location: `${redirectUrl}/payment/success?paymentId=${razorpay_payment_id}`,
      },
    });
  } else {
    callback(null, {
      statusCode: 302,
      headers: {
        Location: `${redirectUrl}/payment/failure?paymentId=${razorpay_payment_id}`,
      },
    });
  }
};
