const Winston = require('winston');

exports.Logger = ((req, res, next) => {
  Winston.log({
    level: 'info',
    serverTime: req.serverDate,
    requestType: req.method,
    url: req.url,
    body: req.body,
    query: req.query,
    headers: req.headers,
    dateValidation: req.requestDate,
  });
  next();
});
