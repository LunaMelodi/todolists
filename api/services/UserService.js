import database from '../db/models';

class UserService {

  static async addUser(newUser) {
    try {
      return await database.Users.create(newUser);
    } catch (error) {
      throw error;
    }
  }

  static async getAllUsers() {
    try {
      return await database.Users.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async getOneUserById(id) {
    try {
      const userRecord = await database.Users.findOne({
        where: { id: id }
      });

      return userRecord;
    } catch (error) {
      throw error;
    }
  }

  static async getOneUserByEmail(email) {
    try {
      const userRecord = await database.Users.findOne({
        where: { email: email }
      });

      return userRecord;
    } catch (error) {
      throw error;
    }
  }

  static async updateUser(id, updateUser) {
    try {
      const userToUpdate = await database.Users.findOne({
        where: { id: id }
      });

      if (userToUpdate) {
        await database.Users.update(updateUser, { where: { id: id } });

        return updateUser;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async deleteUser(id) {
    try {
      const userToDelete = await database.Users.findOne({ where: { id: Number(id) } });

      if (userToDelete) {
        const deletedUser = await database.Users.destroy({
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