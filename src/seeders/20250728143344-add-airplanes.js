'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.bulkInsert('airplanes', [
        {
          modelnumber: 'Boeing 737',
          capacity: 200,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          modelnumber: 'Airbus A320',
          capacity: 250,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]);
    } catch (error) {
      console.error("❌ SEED INSERT ERROR:");
      console.error(error.name);
      console.error(error.message);
      console.error(error.errors);
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('airplanes', null, {});
  }
};
