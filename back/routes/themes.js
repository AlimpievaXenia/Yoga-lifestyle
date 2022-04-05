const themesRouter = require('express').Router();
const { showThemes } = require('../controllers/themes');

themesRouter
  .route('/themes')
  .get(showThemes);

module.exports = themesRouter;
