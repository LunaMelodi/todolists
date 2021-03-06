import newbutton from '/client/js/components/listTodos/todoModalW/newbutton.js';
import editTodoModalW from '/client/js/components/listTodos/todoModalW/editTodoModalW.js';

export default function todoModalW(todo, listId) {
  const itself = document.querySelector('.modal-todo-background');
  if(itself) {
    itself.remove();
  }

  let body = document.body;

  let windowBackground = document.createElement('div');
  windowBackground.className = 'modal-todo-background';

  let todoInfoContainer = document.createElement('div');
  todoInfoContainer.setAttribute('class', 'todo-info-container');

  let todoTitle = document.createElement('h1');
  todoTitle.className = 'modal-todo-title';
  todoTitle.innerHTML = todo.title;

  let todoDescription = document.createElement('p');
  todoDescription.className = 'modal-todo-description';
  todoDescription.innerHTML = todo.note;

  let edit = newbutton('edit' , 'edit-main-button', 'edit-todo-button');
  let close = newbutton( '[x]', 'close-modal-button', 'close-modal-button');
  
  
  todoInfoContainer.prepend(todoTitle)
  todoInfoContainer.append(todoDescription)
  todoInfoContainer.append(edit)
  todoInfoContainer.append(close)

  windowBackground.append(todoInfoContainer)
  body.prepend(windowBackground);
  
  edit.addEventListener('click', evt => {
    let editWindow = editTodoModalW(todo, listId);
    todoInfoContainer.replaceWith(editWindow);
  })

  close.addEventListener('click', evt => {
    windowBackground.remove()
  })
  return 1
}
