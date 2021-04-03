const { StatusCodes } = require('http-status-codes');

exports.RandomError = ((req, res) => {
  const random = Math.round(Math.random());
  if (random === 1) {
    res.sendStatus(StatusCodes.OK);
  } else {
    throw new Error('Oops');
  }
});
