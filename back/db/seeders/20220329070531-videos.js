module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Videos', [
      {
        introductionPracticeId: 1,
        url: '/head.MP4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        introductionPracticeId: 2,
        url: '/body.MP4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        introductionPracticeId: 3,
        url: '/legs.MP4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        introductionPracticeId: 4,
        url: '/meditation.MP4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        introductionPracticeId: 5,
        url: '/hands.MP4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        introductionPracticeId: 6,
        url: '/training.MP4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('Videos');
  },
};
