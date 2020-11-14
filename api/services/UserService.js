import database from '../db/models';

class UserService {
  static async addUser(newUser) {
    return database.Users.create(newUser);
  }

  static async getAllUsers() {
    return database.Users.findAll();
  }

  static async getOneUserById(id) {
    const userRecord = await database.Users.findOne({
      where: { id },
    });

    return userRecord;
  }

  static async getOneUserByEmail(email) {
    const userRecord = await database.Users.findOne({
      where: { email },
    });

    return userRecord;
  }

  static async updateUser(id, updateUser) {
    const userToUpdate = await database.Users.findOne({
      where: { id },
    });

    if (userToUpdate) {
      await database.Users.update(updateUser, { where: { id } });

      return updateUser;
    }
    return null;
  }

  static async deleteUser(id) {
    const userToDelete = await database.Users.findOne({ where: { id: Number(id) } });

    if (userToDelete) {
      const deletedUser = await database.Users.destroy({
        where: { id: Number(id) },
      });
      return deletedUser;
    }
    return null;
  }
}

export default UserService;
