import { Router } from 'express';
import TodoController from '../controllers/TodoController.js';

var router = Router();

router.get('/', TodoController.getAllTodos);
router.post('/', TodoController.addTodo);
router.get('/:id', TodoController.getOneTodo);
router.put('/:id', TodoController.updatedTodo);
router.delete('/:id', TodoController.deleteTodo);

export default router;