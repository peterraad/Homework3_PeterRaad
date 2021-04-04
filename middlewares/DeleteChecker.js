const { StatusCodes } = require('http-status-codes');

exports.DeleteChecker = ((req, res, next) => {
  if (!(req.method === 'DELETE')) {
    next();
  } else {
    res.sendStatus(StatusCodes.METHOD_NOT_ALLOWED);
  }
});
