const logoutRouter = require('express').Router();
const { logout } = require('../controllers/logout');

logoutRouter
  .route('/logout')
  .get(logout);

module.exports = logoutRouter;
