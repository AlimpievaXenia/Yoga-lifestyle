const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Practice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ BookPractice, Photo }) {
      Practice.hasMany(BookPractice, { foreignKey: 'practiceId' });
      Practice.hasMany(Photo, { foreignKey: 'practiceId' });
    }
  }
  Practice.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    type: {
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
    modelName: 'Practice',
  });
  return Practice;
};
