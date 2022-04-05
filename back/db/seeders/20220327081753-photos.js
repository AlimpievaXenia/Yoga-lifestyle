module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Photos', [
      {
        entryId: 1,
        url: '/aboutMe.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entryId: 2,
        url: '/certificate.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entryId: 3,
        url: '/certificateTwo.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entryId: 4,
        url: '/mountains.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entryId: 5,
        url: '/yoga.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entryId: 6,
        url: '/practices.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entryId: 7,
        url: '/inspiration.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entryId: 8,
        url: '/feedback.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entryId: 9,
        url: '/morning.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entryId: 10,
        url: '/day.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entryId: 11,
        url: '/evening.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entryId: 12,
        url: '/individual.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entryId: 13,
        url: '/group.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entryId: 14,
        url: '/one.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entryId: 15,
        url: '/two.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entryId: 16,
        url: '/three.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entryId: 17,
        url: '/four.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entryId: 18,
        url: '/five.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entryId: 19,
        url: '/six.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entryId: 20,
        url: '/seven.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entryId: 21,
        url: '/eight.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entryId: 22,
        url: '/nine.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entryId: 23,
        url: '/oneTeleg.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entryId: 24,
        url: '/twoTeleg.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entryId: 25,
        url: '/threeTeleg.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entryId: 26,
        url: '/fourTeleg.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entryId: 27,
        url: '/fiveTeleg.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entryId: 28,
        url: '/sixTeleg.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entryId: 29,
        url: '/sevenTeleg.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entryId: 30,
        url: '/eightTeleg.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entryId: 31,
        url: '/nineTeleg.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entryId: 32,
        url: '/tenTeleg.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entryId: 33,
        url: '/oneFeedback.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entryId: 34,
        url: '/twoFeedback.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entryId: 35,
        url: '/threeFeedback.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entryId: 36,
        url: '/fourFeedback.JPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Photos');
  },
};
