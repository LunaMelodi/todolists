'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UserList.init({
    userId: DataTypes.UUID,
    listId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserList',
  });
  return UserList;
};

module.exports = (sequelize, DataTypes) => {
  const UserList = sequelize.define('UserList', {
    userId: DataTypes.UUID,
    listId: DataTypes.INTEGER
  });

  UserList.associate = function(models) {
    UserList.belongsTo(models.List, {foreignKey: 'listId', as: 'list'}),
    UserList.belongsTo(models.User, {foreignKey: 'userId', as: 'user'})
  }

  return UserList;
}