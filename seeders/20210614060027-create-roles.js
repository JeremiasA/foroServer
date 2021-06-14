'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Roles', [
      {
        name: 'Admin',
        description: 'Administrator',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Standard',
        description: 'Usuario',
        createdAt: new Date,
        updatedAt: new Date
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
  }
};
