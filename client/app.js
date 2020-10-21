import createTodo from '/client/js/createTodo.js';
import getTodos from '/client/js/getTodos.js';
import deleteTodo from '/client/js/deleteTodo.js';




var form = document.querySelector('#add-todo-form');

getTodos()

form.addEventListener('submit', evt => {
  evt.preventDefault();

  createTodo();
});



/*
var ul = document.getElementById('list-items');
//console.log(ul)
console.log(ul.children, '  -------')
ul.addEventListener('click', evt => {
  
  if (evt.target.classList.contains('delete-todo')) {
    const itemKey = evt.target.parentElement.dataset.key;
    deleteTodo(itemKey);
  }
})*/
