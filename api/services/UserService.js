import database from '../db/models';

class UserService {

  static async addUser(newUser) {
    try {
      return await database.User.create(newUser);
    } catch (error) {
      throw error;
    }
  }

  static async getAllUsers() {
    try {
      return await database.User.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async getOneUserById(id) {
    try {
      const userRecord = await database.User.findOne({
        where: { id: id }
      });

      return userRecord;
    } catch (error) {
      throw error;
    }
  }

  static async getOneUserByEmail(email) {
    try {
      const userRecord = await database.User.findOne({
        where: { email: email }
      });

      return userRecord;
    } catch (error) {
      throw error;
    }
  }

  static async updateUser(id, updateUser) {
    try {
      const userToUpdate = await database.User.findOne({
        where: { id: id }
      });

      if (userToUpdate) {
        await database.User.update(updateUser, { where: { id: id } });

        return updateUser;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async deleteUser(id) {
    try {
      const userToDelete = await database.User.findOne({ where: { id: Number(id) } });

      if (userToDelete) {
        const deletedUser = await database.User.destroy({
          where: { id: Number(id) }
        });
        return deletedUser;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;