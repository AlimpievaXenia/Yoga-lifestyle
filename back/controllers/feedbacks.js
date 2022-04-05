const { Feedback } = require('../db/models');

exports.createFeedback = async (req, res) => {
  const { input, id } = req.body;

  let feedback;
  try {
    feedback = await Feedback.create({
      text: input.feedback,
      userId: id,
    });
    res.json(feedback);
  } catch (error) {
    res
      .status(500)
      .end();
  }
};
