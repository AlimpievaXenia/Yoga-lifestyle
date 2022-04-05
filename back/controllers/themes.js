const { IntroductionPractice, Video } = require('../db/models');

exports.showThemes = async (req, res) => {
  try {
    const videos = await Video.findAll({
      include: [
        {
          model: IntroductionPractice,
          required: true,
        },
      ],
    });
    res.json(videos);
  } catch (error) {
    res
      .status(500)
      .end();
  }
};
