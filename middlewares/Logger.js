const Winston = require('winston');

const Wlogger = Winston.createLogger({
  transports: [
    new Winston.transports.Console({
      format:
    Winston.format.json(),
    }),
  ],
});

exports.Logger = ((req, res, next) => {
  Wlogger.log({
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
