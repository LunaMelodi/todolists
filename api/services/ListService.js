import db from '../db/models';

class ListService {

  static async addList(newList) {
    try {
      console.log("in ListService.addList()");
      return await db.Lists.create(newList);
    } catch (error) {
      throw error;
    }
  }

  // Debugging
  static async getAllLists() { 
    try {
      return await db.Lists.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async getAllListsByUserId(userId) {
    try {
      return await db.Users.findByPk(userId, { 
        include: ['Lists']
      });
    } catch (error) {
      throw error;
    }
  }

  // unnecessary
  static async getOneList(id) {
    try {
      const theList = await db.Lists.findOne({
        where: { id: Number(id) }
      });

      return theList;
    } catch (error) {
      throw error;
    }
  }

  static async updateList(id, updateList) {
    try {
      const listToUpdate = await db.Lists.findOne({
        where: { id: Number(id) }
      });

      if (listToUpdate) {
        await db.Lists.update(updateList, { 
          where: { id: Number(id) } 
        });

        return updateList;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async deleteList(id) {
    try {
      const listToDelete = await db.Lists.findOne({ where: { id: Number(id) } });

      if (listToDelete) {
        const deletedList = await db.Lists.destroy({
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