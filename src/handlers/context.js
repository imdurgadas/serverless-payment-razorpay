const { razorPayKey } = require('../utils/helper');

module.exports.handler = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  const res = {
    key: razorPayKey,
  };
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(res),
  });
};
