'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example: 
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

   await queryInterface.bulkInsert('airports', [
    {name: 'patna', address: 'patna,bihar,india', cityId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {name: 'delhi', address: 'delhi,delhi,india', cityId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    
    {name: 'howrah', address: 'kolkata,west bengal,india', cityId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {name: 'faridabad', address: 'faridabad,haryana,india', cityId:4 ,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    
   ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
