import db from '../db/models';
import UserService from './UserService.js';

class ListService {

  static async addList(newList, userId) {
    try {
      console.log("in ListService.addList()");

      let savedList = await db.Lists.create(newList);
      console.log('savedList :>> ', savedList);

      let user = await UserService.getOneUserById(userId);
      console.log('user :>> ', user);

      let success = await user.addList(savedList);

      let userLists = await db.UserLists.findAll();
      console.log('userLists :>> ', userLists);

      return savedList;

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
      let userListObject = await db.Users.findByPk(userId, { 
        include: [db.Lists]
      });
      console.log('userListObject :>> ', userListObject);

      let lists = await userListObject.get('Lists');

      console.log('lists :>> ', lists);
      
      let simplifiedLists = lists.map(list => {
        let simplifiedList = {
          listId: list.dataValues.id,
          name: list.dataValues.name
        };

        return simplifiedList;
      });
      console.log('simplifiedLists :>> ', simplifiedLists);
      
      return simplifiedLists;

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

  static async updateList(listId, userId, updateList) {
    try {
      console.log("In ListService.updateList()");

      let userOwnsList = await checkUserOwnsList(listId, userId);
      
      if (!userOwnsList) throw new Error('User does not have access to this list!');

      const listToUpdate = await db.Lists.findOne({
        where: { id: Number(listId) }
      });

      if (listToUpdate) {
        await db.Lists.update(updateList, { 
          where: { id: Number(listId) } 
        });

        return updateList;
      }
      return null;
    } catch (error) {
      console.log('error :>> ', error);
      throw error;
    }
  }

  static async deleteList(listId, userId) {
    try {
      console.log("in ListService.deleteList()");

      let userOwnsList = await checkUserOwnsList(listId, userId);
      
      if (!userOwnsList) throw new Error('User does not have access to this list!');

      const listToDelete = await db.Lists.findOne({ where: { id: Number(listId) } });
      console.log("1");
      if (listToDelete) {
        let user = await UserService.getOneUserById(userId);
        console.log('user :>> ', user);
        console.log("2");
        if (!user) throw error;
        console.log("3");
        let success = await user.removeList(listToDelete);
        console.log("4");
        const deletedList = await db.Lists.destroy({
          where: { id: Number(listId) }
        });
        console.log('deletedList :>> ', deletedList);
        console.log("5");
        let userLists = await db.UserLists.findAll();
        console.log('userLists :>> ', userLists);
        let lists = await db.Lists.findAll();
        console.log('Lists :>> ', lists);
        console.log("6");
        return deletedList;
      }
      
      return null;
    } catch (error) {
      console.log('error in deleteList() :>> ', error in deleteList());
      throw error;
    }
  }
}

async function checkUserOwnsList (listId, userId) {
  var foundUserList = await db.UserLists.findOne({
    where: {
      listId: listId,
      userId: userId
    }
  })
  console.log('foundUserList :>> ', foundUserList);

  if (foundUserList) {
    return true;
  } else {
    return false;
  }
}

export default ListService;