import db from '../db/models';
import { checkUserOwnsList } from '../utils/checkUserOwnsList';
import UserService from './UserService';

class ListService {
  static async addList(newList, userId) {
    console.log('in ListService.addList()');

    const savedList = await db.Lists.create(newList);
    // console.log('savedList :>> ', savedList);

    const user = await UserService.getOneUserById(userId);
    // console.log('user :>> ', user);

    await user.addList(savedList);

    await db.UserLists.findAll();
    // console.log('userLists :>> ', userLists);

    return savedList;
  }

  // Debugging
  static async getAllLists() {
    return db.Lists.findAll();
  }

  static async getAllListsByUserId(userId) {
    const userListObject = await db.Users.findByPk(userId, {
      include: [db.Lists],
    });
      // console.log('userListObject :>> ', userListObject);

    const lists = await userListObject.get('Lists');

    // console.log('lists :>> ', lists);

    const simplifiedLists = lists.map((list) => {
      const simplifiedList = {
        listId: list.dataValues.id,
        name: list.dataValues.name,
      };

      return simplifiedList;
    });
      // console.log('simplifiedLists :>> ', simplifiedLists);

    return simplifiedLists;
  }

  // unnecessary
  static async getOneList(id) {
    const theList = await db.Lists.findOne({
      where: { id: Number(id) },
    });

    return theList;
  }

  static async updateList(listId, userId, updateList) {
    console.log('In ListService.updateList()');

    const userOwnsList = await checkUserOwnsList(listId, userId);

    if (!userOwnsList) throw new Error('User does not have access to this list!');

    const listToUpdate = await db.Lists.findOne({
      where: { id: Number(listId) },
    });

    if (listToUpdate) {
      await db.Lists.update(updateList, {
        where: { id: Number(listId) },
      });

      return updateList;
    }
    return null;
  }

  static async deleteList(listId, userId) {
    console.log('in ListService.deleteList()');

    const userOwnsList = await checkUserOwnsList(listId, userId);

    if (!userOwnsList) throw new Error('User does not have access to this list!');

    const listToDelete = await db.Lists.findOne({ where: { id: Number(listId) } });

    if (listToDelete) {
      const user = await UserService.getOneUserById(userId);
      console.log('user :>> ', user);

      if (!user) throw Error;

      await user.removeList(listToDelete);

      const deletedList = await db.Lists.destroy({
        where: { id: Number(listId) },
      });
      console.log('deletedList :>> ', deletedList);

      const userLists = await db.UserLists.findAll();
      console.log('userLists :>> ', userLists);

      const lists = await db.Lists.findAll();
      console.log('Lists :>> ', lists);

      return deletedList;
    }

    return null;
  }
}

export default ListService;
