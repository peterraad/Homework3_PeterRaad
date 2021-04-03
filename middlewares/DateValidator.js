const { StatusCodes } = require('http-status-codes');

// check if this works
const DateValidationFinder = (thing, search) => {
  let result = null;
  Object.keys(search).forEach((key) => {
    if ((key.toLowerCase() === thing)) {
      result = search[key];
    }// console.log(key, obj[key]);
  });
  return result;
};

exports.DateValidator = ((req, res, next) => {
  const queryChecker = DateValidationFinder('date-validation', req.query);
  const headerChecker = DateValidationFinder('date-validation', req.headers);

  if ((queryChecker || headerChecker) != null && !(Number.isNaN(queryChecker)
    || Number.isNaN(headerChecker))) {
    const requestDate = (queryChecker != null) ? queryChecker : headerChecker;
    const serverDate = Math.round(Date.now() / 1000);
    if (requestDate > (serverDate - (5 * 60)) && requestDate < (serverDate + (5 * 60))) {
      req.requestDate = requestDate;
      req.serverDate = serverDate;
      next();
    } else {
      res.sendStatus(StatusCodes.UNAUTHORIZED);
    }
  } else {
    res.sendStatus(StatusCodes.UNAUTHORIZED);
  }
});
