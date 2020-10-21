'use strict';
const {
  Model
} = require('sequelize');

/* module.exports = (sequelize, DataTypes) => {
  class todo extends Model {
    
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     
    static associate(models) {
      // define association here
    }
  };
  todo.init({
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'todo',
  });
  return todo;
}; */

module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  return Todo;
};