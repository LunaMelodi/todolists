import jwt from 'jsonwebtoken';
import UserService from '../services/UserService';
import ResGen from '../utils/ResGeneration';
import * as password from '../utils/passwordAdapter';
import transporter from '../utils/mailer';
import validateUser from '../utils/validateUser';

const resgen = new ResGen();

class AuthController {
  static async signup(req, res) {
    if (validateUser(req.body) && typeof (req.body.name) === 'string' && req.body.name !== '') {
      let userRecord = await UserService.getOneUserByEmail(req.body.email);

      if (!userRecord) {
        const { email } = req.body;

        const passwordHashed = await password.hashPassword(req.body.password);

        console.log('adding user');
        userRecord = await UserService.addUser({
          name: req.body.name,
          email,
          password: passwordHashed,
        });

        // userRecord = await UserService.getOneUserByEmail(email);
        console.log('userRecord retrieved from db :>> ', userRecord);
        console.log('signing jwt...');
        console.log('userRecord.id :>> ', userRecord.id);
        jwt.sign(
          {
            user_id: userRecord.id,
          },
          process.env.EMAIL_SECRET,
          {
            expiresIn: '1d',
          },
          (err, emailToken) => {
            const url = `http://localhost:8000/auth/confirmation/${emailToken}`;
            console.log('sending email!');
            transporter.sendMail({
              to: email,
              subject: 'Confirm Email',
              html: `Please click this email to confirm your email: <a href="${url}">${url}</a>`,
            });
          },
        );

        console.log('email sent, sending name and email json response back to client.');
        return res.json({
          user: {
            name: req.body.name,
            email: req.body.email,
          },
        });

        /* res.json({
          message: '✅'
        }); */
      }
      console.log('userRecord :>> ', userRecord);

      return resgen.setError(400, 'Email is already in use.').send(res);
    }
    return resgen.setError(400, 'Invalid user').send(res);
  }

  static async login(req, res) {
    console.log('req.cookie :>> ', req.cookie);
    if (validateUser(req.body)) {
      const userRecord = await UserService.getOneUserByEmail(req.body.email);

      if (userRecord) {
        console.log('userRecord :>> ', userRecord);

        if (!userRecord.isConfirmed) {
          return resgen.setError(400, 'Please confirm your email to login.').send(res);
        }

        const correctPassword = await password.verifyPassword(userRecord.password, req.body.password);

        if (correctPassword) {
          const isSecure = process.env.NODE_ENV !== 'development';
          const numDays = 200;
          console.log('req :>> ', req);
          console.log('setting cookie now...');

          res.cookie('user_id', userRecord.id, {
            httpOnly: true,
            secure: isSecure,
            sameSite: 'none',
            signed: true,
            // expires: new Date(Date.now() + 900000000)
            maxAge: 1000 * 60 * 60 * 24 * numDays,
          });
          console.log('cookie should be set: res.cookie :>> ', res.cookie);
          return res.json({
            message: 'success. logging in...',
            user: userRecord,
          });
        }
        return resgen.setError(400, 'Incorrect password').send(res);
      }
      return resgen.setError(400, 'User not found in database').send(res);
    }
    return resgen.setError(400, 'Invalid user').send(res);
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
    const isSecure = process.env.NODE_ENV !== 'development';

    res.cookie('user_id', 'logged out', {
      httpOnly: true,
      secure: isSecure,
      sameSite: 'none',
      signed: true,
      // expires: Date.now()
      maxAge: 0,
    });
    res.json({
      message: 'You have been logged out!',
    });
  }
}

export default AuthController;
