const Express = require('express');
const BodyParser = require('body-parser');
const Winston = require('winston');

const app = Express();

app.use(BodyParser.json());
app.use(((req, res, next) => {
  console.log(req.method);
  next();
}));

app.get('/', (req, res) => {
  res.send('Hello World');
});
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
