const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Entry, Practice }) {
      Photo.belongsTo(Entry, { foreignKey: 'entryId' });
      Photo.belongsTo(Practice, { foreignKey: 'practiceId' });
    }
  }
  Photo.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    entryId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Entries',
        key: 'id',
      },
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    practiceId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Practices',
        key: 'id',
      },
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
    modelName: 'Photo',
  });
  return Photo;
};
