var db = require('../db/dataAccess');

exports.todo_list = async function(req, res) {
  try {
    var todos = await db.getTodos();
    console.log('todos :>> ', todos);
    res.json({data: todos}).status(200);
  }
  catch {
    res.send('Error retrieving todos from DB').status(404);
  }
  
}

exports.create_todo = async function(req, res) {
  try {
    var success = await db.insertTodo(req.body);
    res.send('Post successful!').status(200);
  }
  catch {
    res.send('Error').status(404);
  }
}

exports.delete_todo = async function(req, res) {
  try {
    console.log('req.params :>> ', req.params);
    var success = await db.deleteTodo(req.params.id);
    res.send('Deletion successful!').status(200);
  }
  catch(error) {
    res.send(error).status(404);
  }
}