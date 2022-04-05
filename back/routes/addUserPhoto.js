const addUserPhotoRouter = require('express').Router();
const multer = require('multer');
const { User } = require('../db/models');

const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'assets');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

addUserPhotoRouter.post(
  '/user/photo',
  multer({ storage: storageConfig }).single('file'),
  async (req, res) => {
    const id = req.session?.user?.id;
    try {
      const user = await User.findOne({ where: { id } });
      user.photo = req.file.filename;
      user.save();
      if (user) {
        res.json(user);
      }
    } catch (error) {
      res.status(500).end();
    }
  },
);

module.exports = addUserPhotoRouter;
