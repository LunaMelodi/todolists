'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const List = sequelize.define('Lists', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    //schema: 'List',
    //tableName: 'list',
    //freezeTableName: true
  });

  List.associate = function(models) {
    List.hasMany(models.Todos, {
      //as: 'todos'
    })
    List.belongsToMany(models.Users, {
      through: 'UserLists', 
      foreignKey: 'listId', 
      //as: 'users'
    })
  }; 

  return List;
};