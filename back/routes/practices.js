const practecesRouter = require('express').Router();
const { showPractices } = require('../controllers/practices');

practecesRouter
  .route('/practices')
  .get(showPractices);

module.exports = practecesRouter;
