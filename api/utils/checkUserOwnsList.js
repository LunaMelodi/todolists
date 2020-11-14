import db from '../db/models';

async function checkUserOwnsList(listId, userId) {
  const foundUserList = await db.UserLists.findOne({
    where: {
      listId,
      userId,
    },
  });
  console.log('foundUserList :>> ', foundUserList);

  if (foundUserList) {
    return true;
  }
  return false;
}

export default checkUserOwnsList;
