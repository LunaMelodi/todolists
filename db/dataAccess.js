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

  console.log('idToDelete :>> ', idToDelete);
  console.log('todos before deletion :>> ', todos);
  
  var removeIndex = 0;

  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === Number(idToDelete)) {
      removeIndex = i;
      break;
    }
  }

  console.log(removeIndex);
  todos.splice(removeIndex, 1);

  console.log('todos after deletion :>> ', todos);
  
  return 1;
}

