'use strict';
import { v4 as uuid } from 'uuid';
import { Model } from 'sequelize'; //not tested yet \/
// const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: true,
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        notEmpty: true
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: true,
        notEmpty: true
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((user, _ ) => {
    return user.id = uuid();
  });
  return User;
};