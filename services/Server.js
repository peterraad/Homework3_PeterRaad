const Express = require('express');
const BodyParser = require('body-parser');
const DateValidator = require('../middlewares/DateValidator');
const DeleteChecker = require('../middlewares/DeleteChecker');
const ErrorHandler = require('../middlewares/ErrorHandler');
const Logger = require('../middlewares/Logger');
const MainRoutes = require('../routes/MainRoute');

const app = Express();

app.use(BodyParser.json());
app.use(DeleteChecker.DeleteChecker);
app.use(DateValidator.DateValidator);
app.use(Logger.Logger);
app.use(MainRoutes);
app.use(ErrorHandler.ErrorHandler);

app.listen(8080);
