const loginRouter = require('express').Router();
const { findUser, getUser } = require('../controllers/login');

loginRouter
  .route('/login')
  .post(findUser);

loginRouter
  .route('/user')
  .get(getUser);

module.exports = loginRouter;
