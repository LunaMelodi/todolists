import ResGen from '../utils/ResGeneration';
import UserService from '../services/UserService.js';

var resgen = new ResGen();

async function authorizeAndAttachUser(req, res, next) {
  console.log('Object.keys(req.params) :>> ', Object.keys(req.params));
  console.log('middleware 2: req.params.id :>> ', req.params.id);

  if(req.signedCookies.user_id) {
    let userRecord = await UserService.getOneUserById(req.signedCookies.user_id);
    
    if (userRecord) {
      req.userRecord = userRecord;
      //console.log('req.userRecord :>> ', req.userRecord);
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