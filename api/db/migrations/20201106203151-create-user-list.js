'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserList', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
        references: {         // User hasMany lists n:m
          model: 'users',
          key: 'id'
        }
      },
      listId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         // List hasMany Users n:m
          model: List,
          key: 'id'
        }
      }, */
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('UserList');
  }
};