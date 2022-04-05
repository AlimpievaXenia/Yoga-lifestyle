const bcrypt = require('bcrypt');
const { User } = require('../db/models');

exports.findUser = async (req, res) => {
  const { email, password } = req.body;
  let user;

  try {
    user = await User.findOne({ where: { email } });
  } catch (error) {
    res.status(400).end();
    return;
  }

  let isSameUser;
  try {
    isSameUser = await bcrypt.compare(password, user.password);
  } catch (error) {
    res.status(500).end();
  }

  if (!isSameUser) {
    res.status(400).end();
    return;
  }
  if (user) {
    req.session.user = user;
    res.json(user);
  }
};

exports.getUser = async (req, res) => {
  const id = req.session?.user?.id;

  try {
    const user = await User.findOne({ where: { id } });
    if (user) {
      res.json(user);
    }
  } catch (error) {
    res.status(400).end();
  }
};
