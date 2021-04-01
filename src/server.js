const Express = require('express');
const BodyParser = require('body-parser');
const Winston = require('winston');
const { StatusCodes } = require('http-status-codes');
// SETUP THE INSTANCE OF WINSTON AND IMPORT IT TO THE MIDDLEWARES THAT NEED IT
// YOU DO NOT NEED WINSTON TO LOG THE ERORR JUST SEND IT TO THE USER AS AN ERROR
const app = Express();

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

// keep this in the server file
app.use(BodyParser.json());

// delete middleware
app.use((req, res, next) => {
  if (!(req.method === 'DELETE')) {
    next();
  } else {
    res.sendStatus(StatusCodes.METHOD_NOT_ALLOWED);
  }
});

app.use((req, res, next) => {
  const queryChecker = DateValidationFinder('date-validation', req.query);
  const headerChecker = DateValidationFinder('date-validation', req.headers);

  if ((queryChecker || headerChecker) != null && !(Number.isNaN(queryChecker)
    || Number.isNaN(headerChecker))) {
    const requestDate = (queryChecker != null) ? queryChecker : headerChecker;
    const serverDate = Math.round(Date.now() / 1000);
    if (requestDate > (serverDate - (5 * 60)) && requestDate < (serverDate + (5 * 60))) {
      req.body.requestDate = requestDate;
      req.body.serverDate = serverDate;
      next();
    } else {
      res.sendStatus(StatusCodes.UNAUTHORIZED);
    }
  } else {
    res.sendStatus(StatusCodes.UNAUTHORIZED);
  }
  // next();
});

// logs the incoming request with winston
app.use((req, res, next) => {
  Winston.log({
    level: 'info',
    serverTime: req.body.serverDate,
    requestType: req.method,
    url: req.url,
    body: req.body,
    query: req.query,
    headers: req.headers,
    dateValidation: req.body.requestDate,
  });
  next();
});

app.use((req, res) => {
  const random = Math.round(Math.random());
  if (random === 1) {
    res.sendStatus(StatusCodes.OK);
  } else {
    throw new Error('Oops');
  }
});

app.use((err, req, res, next) => {
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(`We're sorry, the error was: ${err.message}`);
  // const errormessage = `We're sorry, the error was: ${err.message}`;
  // Winston.log({
  //   level: 'error',
  //   errorMessage: errormessage,
  // });
});

app.listen(8080);

// FOR ROUTERS USE ROUTE.ALL
