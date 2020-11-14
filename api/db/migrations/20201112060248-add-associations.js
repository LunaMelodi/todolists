module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Todos',
      'listId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Lists',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    );
  },

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      'Todos', // name of Source model
      'listId', // key we want to remove
    );
  },
};
