'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const List = sequelize.define('List', {
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
    List.hasMany(models.Todo, {
      //as: 'todos'
    })
    /* List.belongsToMany(models.User, {
      through: 'UserLists', 
      foreignKey: 'userId', 
      as: 'users'
    })*/
  }; 

  return List;
};