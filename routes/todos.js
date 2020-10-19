var express = require('express');
var router = express.Router();

var todo_controller = require('../controllers/todoController');

router.get('/', todo_controller.todo_list);

router.post('/', todo_controller.create_todo);

router.post('/:id', todo_controller.delete_todo)
// this should be a delete not a post

module.exports = router;