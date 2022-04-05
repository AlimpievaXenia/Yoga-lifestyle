module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Entries', [
      {
        text: 'aboutMe',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'certificate',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'certificateTwo',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'homepageMainPhotoMountains',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'homepageCategoryYoga',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'homepageCategoryPractices',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'homepageCategoryInspiration',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'homepageCategoryFeedback',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'inspirationpageMorning',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'inspirationpageDay',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'inspirationpageEvening',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'yogapageIndividual',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'yogapageGroup',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'feedbackpageOne',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'feedbackpageTwo',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'feedbackpageThree',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'feedbackpageFour',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'feedbackpageFive',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'feedbackpageSix',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'feedbackpageSeven',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'feedbackpageEight',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'feedbackpageNine',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'feedbackpageTen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'feedbackpageEleven',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'feedbackpageTwelve',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'feedbackpageThirteen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'feedbackpageFourteen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'feedbackpageFifteen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'feedbackpageSixteen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'feedbackpageSeventeen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'feedbackpageEighteen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'feedbackpageNineteen',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'feedbackpageTwenty',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'feedbackpageTwentyOne',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'feedbackpageTwentyTwo',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'feedbackpageTwentyThree',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Entries');
  },
};
