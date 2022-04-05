exports.logout = (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      res
        .status(500)
        .send('error');
      return;
    }

    res
      .clearCookie('user_id')
      .status(200)
      .send('Session closed');
  });
};
