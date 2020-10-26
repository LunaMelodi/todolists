import createTodo from '/js/createTodo.js';
import getTodos from '/js/getTodos.js';
import deleteTodo from '/js/deleteTodo.js';
import createTodoInBrowser from '/js/createTodoInBrowser.js';
import getTodosFromBrowser from '/js/getTodosFromBrowser.js';
import deleteTodoBrowser from '/js/deleteTodoBrowser.js';

var form = document.querySelector('#add-todo-form');
var ul = document.querySelector('#list-items');
const loggedIn = false;

loggedIn ? getTodos() : getTodosFromBrowser();

form.addEventListener('submit', evt => {
  evt.preventDefault();
  loggedIn ? createTodo() : createTodoInBrowser();
});

console.log('ul :>> ', ul);
console.log('ul.children :>> ', ul.children);

ul.addEventListener('click', evt => {  
  if (evt.target.classList.contains('delete-todo')) {
    const itemKey = evt.target.parentElement.dataset.key;
    loggedIn ? deleteTodo(itemKey) : deleteTodoBrowser(itemKey);
  }
})



