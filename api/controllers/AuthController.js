import UserService from '../services/UserService.js';
import ResGen from '../utils/ResGeneration.js';
import * as argon2 from 'argon2';
import { randomBytes } from 'crypto';

const resgen = new ResGen();

class AuthController {
  static async signup(req, res) {
    if (validateUser(req.body)) {
      let userRecord = await UserService.getOneUserByEmail(req.body.email);

      if (!userRecord) {
        const salt = randomBytes(32);
        const passwordHashed = await argon2.hash(req.body.password, { salt });
        
        UserService.addUser({
          name: req.body.name,
          email: req.body.email,
          password: passwordHashed
        })
        res.json({
          user: {
            name: req.body.name,
            email: req.body.email,
          }
        })
        
        
        /* res.json({
          message: '✅'
        }); */
      } else {
        console.log('userRecord :>> ', userRecord);

        resgen.setError(400, 'Email is already in use.');
        return resgen.send(res);
      }
      
    } else {
      resgen.setError(400, 'Invalid user');
      return resgen.send(res);
    }
  }
  static async login(req, res) {
    if (validateUser(req.body)) {
      const userRecord = await UserService.getOneUserByEmail(req.body.email);
      
      if(userRecord) {
        console.log('userRecord :>> ', userRecord);

        const correctPassword = await argon2.verify(userRecord.password, req.body.password);
        
        if (correctPassword) {
          let isSecure = req.app.get('env') != 'development';
          
          res.cookie('user_id', userRecord.id, {
            httpOnly: true,
            secure: isSecure,
            signed: true
          })
          res.json({
            message: 'success. logging in...',
            user: userRecord
          })
        } else {
            resgen.setError(400, 'Incorrect password');
            return resgen.send(res);
        }      
      } else {
        resgen.setError(400, 'User not found in database');
        return resgen.send(res);
      }
      
    } else {
      resgen.setError(400, 'Invalid user');
      return resgen.send(res);
    }
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