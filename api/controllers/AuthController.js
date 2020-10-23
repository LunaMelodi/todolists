import UserService from '../services/UserService.js';
import ResGen from '../utils/ResGeneration.js';

const resgen = new ResGen();

class AuthController {
  static async signup(req, res) {
    if (validateUser(req.body)) {
      let theUser = await UserService.getOneUserByEmail(req.body.email);

      if (!theUser) {
        res.json({
          message: '✅'
        });
      } else {
        console.log('theUser :>> ', theUser);

        resgen.setError(400, 'Email is already in use.');
        return resgen.send(res);
      }
      
    } else {
      resgen.setError(400, 'Invalid user');
      return resgen.send(res);
    }
  }
  static async login(req, res) {
    res.json({
      message: 'hi'
    })
  }
  static async logout(req, res) {
    res.json({
      message: 'hi'
    })
  }
}

function validateUser(user) {
  var validEmail = typeof(user.email) === 'string' && user.email.trim() != '';
  var validName = typeof(user.name) === 'string' && user.name.trim() != '';
  var validPassword = typeof(user.password) === 'string' && user.password.trim().length >= 6;

  return validEmail && validName && validPassword;
}

export default AuthController;