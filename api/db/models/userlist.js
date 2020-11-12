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
  const UserList = sequelize.define('UserLists', {
    userId: DataTypes.UUID,
    listId: DataTypes.INTEGER
  }, {
    //schema: 'Userlist',
    //tableName: 'userlisttest',
    //freezeTableName: true
  });

  UserList.associate = function(models) {
    UserList.belongsTo(models.Lists, {
      foreignKey: 'listId', 
      //as: 'lists'
    }),
    UserList.belongsTo(models.Users, {
      foreignKey: 'userId', 
      //as: 'users'
    })
  }

  return UserList;
}