const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class IntroductionPractice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Video }) {
      IntroductionPractice.hasMany(Video, { foreignKey: 'introductionPracticeId' });
    }
  }
  IntroductionPractice.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    theme: {
      type: DataTypes.STRING,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'IntroductionPractice',
  });
  return IntroductionPractice;
};
