module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserLists', {
      /* id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      }, */
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      userId: {
        type: Sequelize.UUID,
        references: {
          model: 'Users',
          key: 'id',
        },
        primaryKey: true,
      },
      listId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Lists',
          key: 'id',
        },
        primaryKey: true,
      },
    });
  },
  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('UserLists');
  },
};
