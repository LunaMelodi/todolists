import database from '../db/models';

class ListService {
  // Debugging
  static async getAllLists() { 
    try {
      return await database.List.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async getAllListsForUser(userId) {
    try {
      return await database.List.findAll( { 
        where: { userId: userId }
      });
    } catch (error) {
      throw error;
    }
  }

  static async addList(newList) {
    try {
      return await database.List.create(newList);
    } catch (error) {
      throw error;
    }
  }

  static async updateList(id, updateList) {
    try {
      const listToUpdate = await database.List.findOne({
        where: { id: Number(id) }
      });

      if (listToUpdate) {
        await database.List.update(updateList, { 
          where: { id: Number(id) } 
        });

        return updateList;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  // unnecessary
  static async getOneList(id) {
    try {
      const theList = await database.List.findOne({
        where: { id: Number(id) }
      });

      return theList;
    } catch (error) {
      throw error;
    }
  }

  static async deleteList(id) {
    try {
      const listToDelete = await database.List.findOne({ where: { id: Number(id) } });

      if (listToDelete) {
        const deletedList = await database.List.destroy({
          where: { id: Number(id) }
        });
        return deletedList;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default ListService;