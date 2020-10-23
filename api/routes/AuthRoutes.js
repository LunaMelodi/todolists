import { Router } from 'express';
import AuthController from '../controllers/AuthController.js';

var router = Router();

router.post('/signup', AuthController.signup);
router.post('/login', AuthController.login);
router.get('/logout', AuthController.logout)

app.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to the auth router (:',
}));

export default router;