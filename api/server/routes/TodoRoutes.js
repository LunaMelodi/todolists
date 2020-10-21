import { Router } from 'express';
import TodoController from '../controllers/TodoController';

const router = Router();

router.get('/', TodoController.getAllTodos);
router.post('/', TodoController.addTodo);
router.get('/:id', TodoController.getATodo);
router.put('/:id', TodoController.updatedTodo);
router.delete('/:id', TodoController.deleteTodo);

export default router;