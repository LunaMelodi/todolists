import createTodo from '/client/js/createTodo.js';
import displayTodos from '/client/js/DisplayTodo.js';

var form = document.querySelector('#add-todo-form');

displayTodos()

form.addEventListener('submit', evt => {
  evt.preventDefault();

  console.log("test")

  createTodo();

});


