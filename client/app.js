import createTodo from '/client/js/createTodo.js';
import getTodos from '/client/js/getTodos.js';
import deleteTodo from '/client/js/deleteTodo.js';

var form = document.querySelector('#add-todo-form');
var ul = document.querySelector('#list-items');

getTodos()

form.addEventListener('submit', evt => {
  evt.preventDefault();

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
