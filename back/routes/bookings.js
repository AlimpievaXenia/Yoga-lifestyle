const bookingsRouter = require('express').Router();
const { createBooking, showBookings } = require('../controllers/bookings');

bookingsRouter
  .route('/book')
  .post(createBooking);

bookingsRouter
  .route('/book/user/:id')
  .get(showBookings);
module.exports = bookingsRouter;
