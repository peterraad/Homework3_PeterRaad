const Express = require('express');
const BodyParser = require('body-parser');
const DateValidator = require('../middlewares/DateValidator');
const DeleteChecker = require('../middlewares/DeleteChecker');
const ErrorHandler = require('../middlewares/ErrorHandler');
const Logger = require('../middlewares/Logger');
const MainRoutes = require('../routes/MainRoute');

// const RandomError = require('../middlewares/RandomError');
// const Winston = require('winston');
// const { StatusCodes } = require('http-status-codes');
// SETUP THE INSTANCE OF WINSTON AND IMPORT IT TO THE MIDDLEWARES THAT NEED IT
// YOU DO NOT NEED WINSTON TO LOG THE ERORR JUST SEND IT TO THE USER AS AN ERROR
const app = Express();
// require('../routes/MainRoute');
// const MainRoutes = require('../routes/MainRoute');
// check if this works
// const DateValidationFinder = (thing, search) => {
//   let result = null;
//   Object.keys(search).forEach((key) => {
//     if ((key.toLowerCase() === thing)) {
//       result = search[key];
//     }// console.log(key, obj[key]);
//   });
//   return result;
// };

// keep this in the server file
app.use(BodyParser.json());
app.use(DeleteChecker.DeleteChecker);
app.use(DateValidator.DateValidator);
app.use(Logger.Logger);
app.use(MainRoutes);
app.use(ErrorHandler.ErrorHandler);

app.listen(8080);

// FOR ROUTERS USE ROUTE.ALL
