const registrationRouter = require('express').Router();
const { createUser } = require('../controllers/registration');
const { isValid } = require('../middlewares/checkFunctions');

registrationRouter
  .route('/registration')
  .post(createUser, isValid);

module.exports = registrationRouter;
