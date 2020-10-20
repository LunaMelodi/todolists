var express = require('express');
var router = express.Router();

var todo_controller = require('../controllers/todoController');


router.get('/', todo_controller.todo_list);

router.post('/', todo_controller.create_todo);

router.delete('/:id', todo_controller.delete_todo);

module.exports = router;