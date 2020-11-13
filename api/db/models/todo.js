'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todos', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    note: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isCompleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
  }, {
    //schema: 'Todo',
    //tableName: 'todotest',
    //freezeTableName: true
  });

  Todo.associate = function(models) {
    Todo.belongsTo(models.Lists, {
      //foreignKey: 'listId', 
      //as: 'list'
    })
  }

  return Todo;
};