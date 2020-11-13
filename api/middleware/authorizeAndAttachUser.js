import ResGen from '../utils/ResGeneration';
import UserService from '../services/UserService.js';

var resgen = new ResGen();

async function authorizeAndAttachUser(req, res, next) {
  if(req.signedCookies.user_id) {
    let userRecord = await UserService.getOneUserById(req.signedCookies.user_id);
    
    if (userRecord) {
      req.userRecord = userRecord;
      console.log('req.userRecord :>> ', req.userRecord);
      next();
    } else {
      return resgen.setError(400, 'User not found in database.').send(res); 
    }
  } else {
    console.log('authAndAttachUser() :>> User not logged in.');
    ;
    return resgen.setError(400, 'User not logged in.').send(res);
  }
}

export default authorizeAndAttachUser;