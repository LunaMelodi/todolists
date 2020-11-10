import { Router } from 'express';
import AuthController from '../controllers/AuthController.js';
import database from '../db/models';
import UserService from '../services/UserService.js';
import jwt from 'jsonwebtoken';

var router = Router();

router.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to the auth router (:',
}));

router.post('/signup', AuthController.signup);
router.post('/login', AuthController.login);
router.get('/logout', AuthController.logout);

router.get('/users', AuthController.getAllUsers);
// for debugging

router.get('/confirmation/:token', async (req, res) => {
  try {
    //const { user: { id } } = jwt.verify(req.params.token, process.env.EMAIL_SECRET);
    let user = jwt.verify(req.params.token, process.env.EMAIL_SECRET);
    let id = user.user_id;
    console.log('user :>> ', user);
    console.log('id :>> ', id);

    //await database.User.update({ confirmed: true }, { where: { id } });
    await UserService.updateUser(id, { confirmed: true });
    console.log('user updated hopefully?');
    
    let userRecord = await UserService.getOneUserById(id);
    console.log('userRecord :>> ', userRecord);

    return res.json({message: 'confirmation complete!'});
  } catch (error) {
    console.log('there was an error :>> ', error)
    return res.json({ error: error });
  }
});


export default router;