import UserService from '../services/UserService.js';
import ResGen from '../utils/ResGeneration.js';
import * as argon2 from 'argon2';
import { randomBytes } from 'crypto';
import jwt from 'jsonwebtoken';
import _ from 'lodash';
import transporter from '../utils/mailer.js';

const resgen = new ResGen();

class AuthController {
  static async signup(req, res) {
    if (validateUser(req.body) && typeof(req.body.name) === 'string' && req.body.name != '') {
      let userRecord = await UserService.getOneUserByEmail(req.body.email);

      if (!userRecord) {
        let email = req.body.email;
        let salt = randomBytes(32);
        let passwordHashed = await argon2.hash(req.body.password, { salt });
        
        console.log('adding user');
        userRecord = await UserService.addUser({
          name: req.body.name,
          email: email,
          password: passwordHashed
        })
        
        //userRecord = await UserService.getOneUserByEmail(email);
        console.log('userRecord retrieved from db :>> ', userRecord);
        console.log('signing jwt...');
        console.log('userRecord.id :>> ', userRecord.id);
        jwt.sign(
          {
            user_id: userRecord.id
          },
          process.env.EMAIL_SECRET,
          {
            expiresIn: '1d',
          },
          (err, emailToken) => {
            const url = `http://localhost:8000/auth/confirmation/${emailToken}`;
            console.log("sending email!");
            transporter.sendMail({
              to: email,
              subject: 'Confirm Email',
              html: `Please click this email to confirm your email: <a href="${url}">${url}</a>`,
            });
          },
        );
        
        console.log('email sent, sending name and email json response back to client.');
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

        return resgen.setError(400, 'Email is already in use.').send(res);        
      }
      
    } else {
      return resgen.setError(400, 'Invalid user').send(res);    
    }
  }
  static async login(req, res) {
    console.log('req.cookie :>> ', req.cookie);
    if (validateUser(req.body)) {
      const userRecord = await UserService.getOneUserByEmail(req.body.email);
      
      if(userRecord) {
        console.log('userRecord :>> ', userRecord);

        if(!userRecord.confirmed) {
          return resgen.setError(400, 'Please confirm your email to login.').send(res);
        } 

        const correctPassword = await argon2.verify(userRecord.password, req.body.password);
        
        if (correctPassword) {
          let isSecure = process.env.NODE_ENV != 'development';
          let numDays = 200;
          console.log('req :>> ', req);
          console.log("setting cookie now...");

          res.cookie('user_id', userRecord.id, {
            httpOnly: true,
            secure: isSecure,
            sameSite: 'none',
            signed: true, 
            //expires: new Date(Date.now() + 900000000) 
            maxAge: 1000 * 60 * 60 * 24 * numDays
          })
          console.log('cookie should be set: res.cookie :>> ', res.cookie);
          res.json({
            message: 'success. logging in...',
            user: userRecord
          })
        } else {
            return resgen.setError(400, 'Incorrect password').send(res);
        }      
      } else {
        return resgen.setError(400, 'User not found in database').send(res);
      }
      
    } else {
      return resgen.setError(400, 'Invalid user').send(res);    
    }
  }

  static async getAllUsers(req, res) {
    try {
      const allUsers = await UserService.getAllUsers();
      if (allUsers.length > 0) {
        resgen.setSuccess(200, 'Users retrieved', allUsers);
      } else {
        resgen.setSuccess(200, 'No user found');
      }
      return resgen.send(res);
    } catch (error) {
      return resgen.setError(400, error).send(res);      
    }
  }

  static async logout(req, res) {
    /* res.clearCookie('user_id', {
      domain: '127.0.0.1:5500', 
      path: '/'
    }); */
    let isSecure = process.env.NODE_ENV != 'development';

    res.cookie('user_id', 'logged out', {
      httpOnly: true,
      secure: isSecure,
      sameSite: 'none',
      signed: true, 
      //expires: Date.now() 
      maxAge: 0
    })
    res.json({
      message: 'You have been logged out!'
    })
  }
}

function validateUser(user) {
  var validEmail = typeof(user.email) === 'string' && user.email.trim() != '';
  var validPassword = typeof(user.password) === 'string' && user.password.trim().length >= 6;

  return validEmail && validPassword;
}

export default AuthController;