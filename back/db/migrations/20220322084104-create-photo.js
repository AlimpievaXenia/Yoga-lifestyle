module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Photos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      entryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Entries',
          key: 'id',
        },
      },
      url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      practiceId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Practices',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Photos');
  },
};
