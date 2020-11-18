'use strict';

const { query } = require("express");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Todos',
      'listId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Lists',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      'Todos', // name of Source model
      'listId' // key we want to remove
    );
  }
};
