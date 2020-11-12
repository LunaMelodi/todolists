'use strict';
import { v4 as uuid } from 'uuid';
import { Model } from 'sequelize';
// const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
        notEmpty: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    isConfirmed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    //schema: 'User',
    //tableName: 'Users',
    //freezeTableName: true
  });

  User.associate = function(models) {
    User.belongsToMany(models.Lists, {
      through: 'UserLists', 
      foreignKey: 'userId', 
      //as: 'lists'
    })
  } 

  User.beforeCreate((user, _ ) => {
    return user.id = uuid();
  });

  return User;
};
