module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('IntroductionPractices', [
      {
        theme: 'head',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme: 'body',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme: 'legs',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme: 'meditation',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme: 'hands',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme: 'training',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('IntroductionPractices');
  },
};
