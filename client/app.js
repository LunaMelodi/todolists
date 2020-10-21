import createTodo from '/client/js/createTodo.js';
import getTodos from '/client/js/getTodos.js';
import deleteTodo from '/client/js/deleteTodo.js';
import createTodoInBrowser from '/client/js/createTodoInBrowser.js';
import getTodosFromBrowser from '/client/js/getTodosFromBrowser.js';

var form = document.querySelector('#add-todo-form');
var ul = document.querySelector('#list-items');
let temporalTodos = [];

getTodos()

form.addEventListener('submit', evt => {
  evt.preventDefault();
  //createTodoInBrowser(temporalTodos)
  createTodo();
});

console.log('ul :>> ', ul);
console.log('ul.children :>> ', ul.children);

ul.addEventListener('click', evt => {  
  if (evt.target.classList.contains('delete-todo')) {
    const itemKey = evt.target.parentElement.dataset.key;
    deleteTodo(itemKey);
  }
})


/*
ul.addEventListener('click', evt => {  
  let li = evt.target

  let placeLast = 99;
  if (evt.target.classList.contains('todo-checkbox')) {
    console.log(evt.target.parentElement)
    evt.target.parentElement.parentElement.style.order = placeLast;
    placeLast++
  }
})
*/