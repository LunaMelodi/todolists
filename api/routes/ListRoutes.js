import { Router } from 'express';
import ListController from '../controllers/ListController.js';

var router = Router();

router.get('/', ListController.getAllListsByUserId);
router.post('/', ListController.addList);
router.get('/:id', ListController.getOneList);
router.put('/:id', ListController.updateList);
router.delete('/:id', ListController.deleteList);

export default router;