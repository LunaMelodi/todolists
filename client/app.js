import generateApp from '/client/js/generateApp';
import createTodo from '/client/js/createTodo';
import getTodos from '/client/js/getTodos';
import deleteTodo from '/client/js/deleteTodo';
import todoModalW from '/client/js/components/todoModalW/todoModalW'; 

generateApp() 

getTodos()

var form = document.querySelector('#add-todo-form');
var ul = document.querySelector('#list-items');


ul.addEventListener('click', evt => {  
    if (evt.target.classList.contains('delete-todo')) {
      const itemKey = evt.target.parentElement.dataset.key;
      deleteTodo(itemKey);
      evt.target.parentElement.remove() //   this line has to be erased 
    }
})

ul.addEventListener('click', async (evt) => {
  if(evt.target.classList.contains('todo-title')) {
    let itemKey = evt.target.parentElement.parentElement.dataset.key;
    let todos = await getTodos()
    let todo = todos.find(elem => {return elem.id === Number(itemKey)})
    todoModalW(todo);
  }
}) 

ul.addEventListener('click',  (evt) => {
  if(evt.target.classList.contains('checkbox-container')) {
    let id = evt.target.parentElement.dataset.key;
    
  }
}) 

form.addEventListener('submit', evt => {
  evt.preventDefault();
  createTodo()
  evt.target.hidden = false;
})  // beware of this listener. It must be at the end of the file.
