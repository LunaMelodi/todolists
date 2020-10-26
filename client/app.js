import generateApp from '/client/js/generateApp.js';
import createTodo from '/client/js/createTodo.js';
import getTodos from '/client/js/getTodos.js';
import deleteTodo from '/client/js/deleteTodo.js';
import generateTodoInput from '/client/js/components/generateTodoInput.js'; 

generateApp()

getTodos()

var form = document.querySelector('#add-todo-form');
var ul = document.querySelector('#list-items');
var addTodoButton = document.querySelector('#add-button');

addTodoButton.addEventListener('click', generateTodoInput);
addTodoButton.addEventListener('click', evt => {
  evt.target.hidden = true;
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  createTodo()
  evt.target.hidden = false;
})

ul.addEventListener('click', evt => {  
    if (evt.target.classList.contains('delete-todo')) {
      const itemKey = evt.target.parentElement.dataset.key;
      deleteTodo(itemKey);
    }
})

