import createTodo from '/client/js/createTodo.js';
import getTodos from '/client/js/getTodos.js';
import deleteTodo from '/client/js/deleteTodo.js';
import createTodoInBrowser from '/client/js/createTodoInBrowser.js';
import getTodosFromBrowser from '/client/js/getTodosFromBrowser.js';
import deleteTodoBrowser from '/client/js/deleteTodoBrowser.js';

var form = document.querySelector('#add-todo-form');
var ul = document.querySelector('#list-items');


console.log(localStorage.getItem('todolist'), '--------****')
console.log(localStorage.getItem('todolistt'), '++---++')

getTodos()
//getTodosFromBrowser()

form.addEventListener('submit', evt => {
  evt.preventDefault();
  createTodo();
  //createTodoInBrowser();
});

console.log('ul :>> ', ul);
console.log('ul.children :>> ', ul.children);

ul.addEventListener('click', evt => {  
  if (evt.target.classList.contains('delete-todo')) {
    const itemKey = evt.target.parentElement.dataset.key;
    deleteTodo(itemKey);
    //deleteTodoBrowser(itemKey);
  }
})



