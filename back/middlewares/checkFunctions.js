exports.isValid = (req, res, next) => {
  if (req.body.name && req.body.password && req.body.email) {
    next();
    return;
  }

  res.send('error', { error: 'Все поля должны быть заполнены' });
};
