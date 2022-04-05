const { sequelize } = require('../db/models');

async function checkDb() {
  try {
    await sequelize.authenticate();
    console.log('DB connected successfully');
  } catch (error) {
    console.log('DB connection failed');
    console.log(error.message);
  }
}

module.exports = checkDb;
