const bcrypt = require('bcrypt');
const { User } = require('../db/models');

exports.createUser = async (req, res) => {
  const {
    firstname, lastname, email, password, phone,
  } = req.body;

  let hash;
  try {
    hash = await bcrypt.hash(password, 10);
  } catch (error) {
    res.status(500).end();
  }

  let user;
  try {
    user = await User.create({
      firstname,
      lastname,
      email,
      password: hash,
      phone,
    });
    if (user) {
      req.session.user = user;
      res.json(user);
    }
  } catch (error) {
    res.status(500).end();
  }
};
