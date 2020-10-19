var todos = [];
var id = 0;

exports.insertTodo = function(todo) {
  todo.id = id++;

  todos.push(todo);

  console.log('todos in dataAccess.insertTodo :>> ', todos)
}

exports.getTodos = function() {
  console.log('todos in dataAccess.getTodos :>> ', todos);

  return todos;
}

exports.deleteTodo = function(idToDelete) {
  idToDelete = parseInt(idToDelete);
  console.log('idToDelete :>> ', idToDelete);
  console.log('todos before deletion :>> ', todos);

  todos = todos.filter(function(todo) {
    console.log('todo :>> ', todo);
    console.log('todo.id !== idToDelete :>> ', todo.id !== idToDelete);
    return todo.id !== idToDelete;
  })

  console.log('todos after deletion :>> ', todos);
}