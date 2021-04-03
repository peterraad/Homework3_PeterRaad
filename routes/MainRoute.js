const Express = require('express');
// const DateValidator = require('../middlewares/DateValidator');
// const DeleteChecker = require('../middlewares/DeleteChecker');
// const ErrorHandler = require('../middlewares/ErrorHandler');
// const Logger = require('../middlewares/Logger');
// const RandomError = require('../middlewares/RandomError');

const router = Express.Router();
const RandomError = require('../controllers/MiddlewareController');

// router.all(BodyParser.json());
router.all(RandomError.RandomError);

module.exports = router;
