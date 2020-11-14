import ResGen from '../utils/ResGeneration';
import UserService from '../services/UserService';

const resgen = new ResGen();

async function authorizeAndAttachUser(req, res, next) {
  if (req.signedCookies.user_id) {
    const userRecord = await UserService.getOneUserById(req.signedCookies.user_id);

    if (userRecord) {
      req.userRecord = userRecord;
      // console.log('req.userRecord :>> ', req.userRecord);
      return next();
    }
    return resgen.setError(400, 'User not found in database.').send(res);
  }
  console.log('authAndAttachUser() :>> User not logged in.');

  return resgen.setError(400, 'User not logged in.').send(res);
}

export default authorizeAndAttachUser;
