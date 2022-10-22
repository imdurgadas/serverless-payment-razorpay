const instance = require('../utils/razorpay');

module.exports.handler = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const { amount } = JSON.parse(event.body);

  var options = {
    amount: Number(amount) * 100,
    currency: 'INR',
  };

  const order = await instance.orders.create(options);

  const res = {
    success: true,
    order,
  };

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(res),
  });
};
