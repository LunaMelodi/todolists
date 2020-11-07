'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    listId: {
      type: DataTypes.INTEGER,
      allowNull: false;
    }
  });

  Todo.associate = function(models) {
    Todo.belongsTo(models.List, {
      foreignKey: 'listId', 
      as: 'list'
    })
  }

  return Todo;
};