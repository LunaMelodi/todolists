import db from '../db/models';

class ListService {

  static async addList(newList) {
    try {
      console.log("in ListService.addList()");
      return await db.List.create(newList);
    } catch (error) {
      throw error;
    }
  }

  // Debugging
  static async getAllLists() { 
    try {
      return await db.List.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async getAllListsByUserId(userId) {
    try {
      return await db.User.findByPk(userId, { 
        include: ['lists']
      });
    } catch (error) {
      throw error;
    }
  }

  // unnecessary
  static async getOneList(id) {
    try {
      const theList = await db.List.findOne({
        where: { id: Number(id) }
      });

      return theList;
    } catch (error) {
      throw error;
    }
  }

  static async updateList(id, updateList) {
    try {
      const listToUpdate = await db.List.findOne({
        where: { id: Number(id) }
      });

      if (listToUpdate) {
        await db.List.update(updateList, { 
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
      const listToDelete = await db.List.findOne({ where: { id: Number(id) } });

      if (listToDelete) {
        const deletedList = await db.List.destroy({
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