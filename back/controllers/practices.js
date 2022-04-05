const { Practice } = require('../db/models');

exports.showPractices = async (req, res) => {
  try {
    const practices = await Practice.findAll();
    res.json(practices);
  } catch (error) {
    res
      .status(500)
      .end();
  }
};
