const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class BookPractice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Practice, Booking }) {
      BookPractice.belongsTo(Booking, { foreignKey: 'bookingId' });
      BookPractice.belongsTo(Practice, { foreignKey: 'practiceId' });
    }
  }
  BookPractice.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    date: {
      type: DataTypes.DATE,
    },
    practiceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Practices',
        key: 'id',
      },
    },
    bookingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Bookings',
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
    modelName: 'BookPractice',
  });
  return BookPractice;
};
