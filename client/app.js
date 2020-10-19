import createTodo from '/client/js/createTodo.js';
// import { DisplayTodos } from 'client/js/DisplayTodo.js';

var form = document.querySelector('#add-todo-form');

console.log(form);
//DisplayTodos()

form.addEventListener('submit', evt => {
  evt.preventDefault();

  console.log("test")

  createTodo();

});


