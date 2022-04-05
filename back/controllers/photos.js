const { Photo, Entry } = require('../db/models');

exports.showPhotos = async (req, res) => {
  try {
    const photos = await Photo.findAll({
      include: [
        {
          model: Entry,
          required: true,
        },
      ],
    });

    const photoAbout = photos.slice(0, 3);
    const homepagePhoto = photos.slice(3, 8);
    const inspirationPhoto = photos.slice(8, 11);
    const practicesPhoto = photos.slice(11, 13);
    const feedbackPhoto = photos.slice(13, 37);

    res.json({
      photoAbout, homepagePhoto, inspirationPhoto, practicesPhoto, feedbackPhoto,
    });
  } catch (error) {
    res
      .status(500)
      .end();
  }
};
