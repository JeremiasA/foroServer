'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      username: 'Admin-Demo',
      email: 'test@test.com',
      // Important: Password not encrypted yet! 
      password: '1234',
      roleId: 1,
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      username: 'Usuario',
      email: 'test@testing.com',
      // Important: Password not encrypted yet! 
      password: '1234',
      roleId: 2,
      createdAt: new Date,
      updatedAt: new Date
    },{
      username: 'OtherUser',
      email: 'tested@test.com',
      // Important: Password not encrypted yet! 
      password: '1234',
      roleId: 2,
      createdAt: new Date,
      updatedAt: new Date
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
  }
};
