const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Video extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ IntroductionPractice }) {
      Video.belongsTo(IntroductionPractice, { foreignKey: 'introductionPracticeId' });
    }
  }
  Video.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    introductionPracticeId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'IntroductionPractices',
        key: 'id',
      },
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
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
    modelName: 'Video',
  });
  return Video;
};
