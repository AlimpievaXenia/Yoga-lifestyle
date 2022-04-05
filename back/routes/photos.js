const photosRouter = require('express').Router();
const { showPhotos } = require('../controllers/photos');

photosRouter
  .route('/photo')
  .get(showPhotos);

module.exports = photosRouter;
