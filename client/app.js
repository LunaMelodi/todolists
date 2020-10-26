import generateApp from '/client/js/generateApp.js';
import createTodo from '/client/js/createTodo.js';
import getTodos from '/client/js/getTodos.js';
import deleteTodo from '/client/js/deleteTodo.js';

generateApp()

getTodos()

var form = document.querySelector('#add-todo-form');
var ul = document.querySelector('#list-items');

form.addEventListener('submit', evt => {
  evt.preventDefault();
  createTodo()
})

ul.addEventListener('click', evt => {  
    if (evt.target.classList.contains('delete-todo')) {
      const itemKey = evt.target.parentElement.dataset.key;
      deleteTodo(itemKey);
    }
})