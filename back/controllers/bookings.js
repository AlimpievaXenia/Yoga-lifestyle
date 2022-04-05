const { Booking, BookPractice, Practice } = require('../db/models');

exports.createBooking = async (req, res) => {
  const { date, trainingType, id } = req.body;
  let book;
  try {
    book = await Booking.create({
      raw: true,
      userId: id,
    });
  } catch (error) {
    res
      .status(500)
      .end();
  }

  try {
    const booking = await BookPractice.create({
      date,
      practiceId: trainingType.id,
      bookingId: book.id,
    });
    res.json(booking);
  } catch (error) {
    res
      .status(500)
      .end();
  }
};

exports.showBookings = async (req, res) => {
  const { id } = req.params;
  try {
    const bookings = await BookPractice.findAll({
      include: [
        {
          model: Practice,
          required: true,
        },
        {
          model: Booking,
          where: { userId: id },
          required: true,
        },
      ],
    });
    const date = new Date();

    const prevBookingsOfUser = bookings.filter((book) => book.date < date);
    const nextBookingsOfUser = bookings.filter((book) => book.date > date);
    res.json({ prevBookingsOfUser, nextBookingsOfUser });
  } catch (error) {
    res
      .status(500)
      .end();
  }
};
