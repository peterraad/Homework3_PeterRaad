const Express = require('express');
const BodyParser = require('body-parser');
const Winston = require('winston');
const { StatusCodes } = require('http-status-codes');

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
// function DateValidationFinder(obj) {
//   return Object.keys(obj).forEach((key) => {
//     if (!(key.toLowerCase() === 'date-validation')) {
//
//     }// console.log(key, obj[key]);
//   });
// }
app.use(BodyParser.json());

// delete middleware
app.use(((req, res, next) => {
  if (!(req.method === 'DELETE')) {
    next();
  } else {
    res.sendStatus(StatusCodes.METHOD_NOT_ALLOWED);
  }
}));

app.use(((req, res, next) => {
  // Object.keys(req.query).forEach((key) => {
  //   console.log(key, req.query[key]);
  // });// Object.keys((obj).forEach((key) => ... obj[key])
  if (DateValidationFinder('date-validation', req.query) || DateValidationFinder('date-validation', req.headers)) {
    console.log('found');
  }
}));

// app.use(((req, res, next) => {
//   console.log(req.method);
//   next();
// }));
//
// app.get('/', (req, res) => {
//   res.send('Hello World');
// });
app.listen(8080);

// iterating through all the keys of an object to get the value you want
// Object.keys((obj).forEach((key) => ... obj[key])

// parse number in base 10
// Number.parseInt(THING, 10);

/// date constructor expects a date - it expects an epoch of time which is time that passed
// since Jan 1st 1970 - it also takes milliseconds - transform it look at the line below
// new Date(Number * 1000)

// if you do date.now() this will give back milliseconds just like above so you do date.now()/1000

// if (!Number.isNaN(whatever)) {
//
// }

// request.query
// request.headers;
// request.method;
// request.originalUrl;

// module.exports = (request, response, next) => {
//   request.PROPERTY = WHATEVER;
//   next();
// };
//
// response.status(StatusCodes.ACCEPTED).send('');
//
// const winstonLogger = Winston.createLogger(
//   {
//     transports:
//       [new Winston.transports.Console({ format: Winston.format.simple() })],
//   },
// );
//
// Math.floor(Math.random() * (max - min + 1) + min);
