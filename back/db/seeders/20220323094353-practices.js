module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Practices', [
      {
        type: 'individual',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'group',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Practices');
  },
};
