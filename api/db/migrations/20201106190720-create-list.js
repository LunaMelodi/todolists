'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('List', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      /* userId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {         // User hasMany Lists n:m
          model: 'User',
          key: 'id'
        }
      }, */
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('List');
  }
};