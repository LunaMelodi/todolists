import createTodo from '/client/js/createTodo.js';
import getTodos from '/client/js/getTodos.js';

var form = document.querySelector('#add-todo-form');

getTodos()

form.addEventListener('submit', evt => {
  evt.preventDefault();

  createTodo();
});
