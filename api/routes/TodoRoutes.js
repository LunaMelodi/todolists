import { Router } from 'express';
import TodoController from '../controllers/TodoController';

const router = Router({ mergeParams: true });

router.get('/', TodoController.getTodos);
// router.get('/', TodoController.getAllTodos);
router.post('/', TodoController.addTodo);
// router.get('/:id', TodoController.getOneTodo);
router.put('/:todoId', TodoController.updateTodo);
router.delete('/:todoId', TodoController.deleteTodo);

export default router;
