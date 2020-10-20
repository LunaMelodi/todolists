import createTodo from '/client/js/createTodo.js';
import getTodos from '/client/js/getTodos.js';
import deleteTodo from '/client/js/deleteTodo.js';




var form = document.querySelector('#add-todo-form');

getTodos()

form.addEventListener('submit', evt => {
  evt.preventDefault();

  createTodo();
});

window.deleteTodo = deleteTodo;

