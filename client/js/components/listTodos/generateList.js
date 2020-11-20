import requestTodos from '/client/js/requests/requestTodos.js'; 
import todoModalW from '/client/js/components/listTodos/todoModalW/todoModalW.js';

export default function generateList(listId) {
    let container = document.querySelector('#list-todos-container');

    let todoList = document.createElement('section');
    todoList.setAttribute('class', 'todo-list');

    let ul = document.createElement('ul');
    ul.setAttribute('class', 'list-items');
    ul.setAttribute('id', 'list-items');

    todoList.append(ul);
    container.append(todoList);
    
    ul.addEventListener('click', e => {  
        if (e.target.classList.contains('delete-todo')) {
          const itemKey = e.target.parentElement.dataset.key;
          // to remove it from the server
          requestTodos.delete(listId, itemKey);
          // from the DOM 
          e.target.parentElement.remove();
        }
    })

    ul.addEventListener('click', async (e) => {
        if(e.target.classList.contains('todo-title')) {
          let itemKey = e.target.parentElement.parentElement.dataset.key;
          let todos = JSON.parse(sessionStorage.getItem('currentListTodos'));
          let todo = todos.find(elem => { return elem.id === +itemKey })
          todoModalW(todo, listId);
        }
    })

    ul.addEventListener('click', async e => {
      if(e.target.classList.contains('checkmark')) {
        let li = e.target.closest('.todo-item');
        let itemKey = li.dataset.key;
        let complete = li.dataset.completed;
        let data = {
          isCompleted: (+complete) ? 0 : 1
        }
        await requestTodos.put(listId, itemKey, data);
        li.dataset.completed = data.isCompleted;
      }
    })
}