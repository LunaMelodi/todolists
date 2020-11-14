import requestTodos from '/client/js/requests/requestTodos.js'; 

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
          requestTodos.delete(itemKey, listId);
          e.target.parentElement.remove(); 
        }
    })

    ul.addEventListener('click', async (evt) => {
        if(evt.target.classList.contains('todo-title')) {
          let itemKey = evt.target.parentElement.parentElement.dataset.key;
          let todo = await requestTodos.get(itemKey);
          todoModalW(todo);
        }
    })
}