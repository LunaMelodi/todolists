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
  
  let indexToDelete = todos.findIndex(item => {return item.id == idToDelete})
  //console.log('---- ', todos[indexToDelete], idToDelete, 'At index ' + indexToDelete)
  if(!indexToDelete === -1){
    let todosRest = todos.splice( indexToDelete, 1 )
  } else {
    null
  }
  
  
  console.log('todos after deletion :>> ', todos);
  
  return 1;
}

