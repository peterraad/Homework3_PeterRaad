const Express = require('express');

const router = Express.Router();
const RandomError = require('../controllers/MiddlewareController');

router.all('/', RandomError.RandomError);

module.exports = router;
