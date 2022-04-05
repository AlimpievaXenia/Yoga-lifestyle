const feedBackRouter = require('express').Router();
const { createFeedback } = require('../controllers/feedbacks');

feedBackRouter
  .route('/feedback')
  .post(createFeedback);

module.exports = feedBackRouter;
