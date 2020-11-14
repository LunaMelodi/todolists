/* const {
  Model,
} = require('sequelize'); */

module.exports = (sequelize, DataTypes) => {
  const List = sequelize.define('Lists', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  List.associate = function (models) {
    List.hasMany(models.Todos, {
      foreignKey: 'listId',
    });
    List.belongsToMany(models.Users, {
      through: 'UserLists',
      foreignKey: 'listId',
    });
  };

  return List;
};
