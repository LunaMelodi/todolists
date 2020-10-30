import newbutton from '/client/js/components/todoModalW/newbutton.js';
import updateTodo from '/client/js/updateTodo.js';

export default function editTodoModalW(todo) {
  let background = document.querySelector('.modal-todo-background');

  let todoInfoContainer = document.createElement('div');
  todoInfoContainer.setAttribute('class', 'todo-info-container');
  let buttonsContainer = document.createElement('div');
  buttonsContainer.setAttribute('class', 'buttons-container');

  let changeTodoTitle = document.createElement('input');
  changeTodoTitle.className = 'modal-todo-title';
  changeTodoTitle.id = 'modal-todo-title';
  changeTodoTitle.value = todo.title;
  changeTodoTitle.setAttribute('placeholder', '...');
  let labelTitle = document.createElement('label');
  labelTitle.setAttribute('for', 'modal-todo-title');
  labelTitle.innerHTML = 'Title: ';

  let changeTodoDescription = document.createElement('textarea');
  changeTodoDescription.className = 'modal-todo-description';
  changeTodoDescription.id = 'modal-todo-description';
  changeTodoDescription.value = todo.description;
  let labelDescription = document.createElement('label');
  labelDescription.setAttribute('for', 'modal-todo-description');
  labelDescription.maxLength = 400;
  labelDescription.innerHTML = 'Description: ';
  
  let changeTodoDueDate = document.createElement('input');
  changeTodoDueDate.className = 'modal-todo-duedate';
  changeTodoDueDate.id = 'modal-todo-duedate';
  changeTodoDueDate.value = todo.duedate;
  let labelDueDate = document.createElement('label');
  labelDueDate.setAttribute('for', 'modal-todo-duedate');
  labelDueDate.innerHTML = 'Due date: ';

  let close = newbutton( '[x]', 'close-modal-button', 'close-modal-button');
  let saveChanges = newbutton( 'save', 'save-modal-button', 'save-modal-button');
  let deleteTodo = newbutton( 'delete todo', 'daleteTodo-modal-button', 'daleteTodo-modal-button');
  
  todoInfoContainer.prepend(labelTitle)
  todoInfoContainer.append(changeTodoTitle)
  todoInfoContainer.append(labelDescription)
  todoInfoContainer.append(changeTodoDescription)
  todoInfoContainer.append(labelDueDate)
  todoInfoContainer.append(changeTodoDueDate)
  
  todoInfoContainer.append(close)
  buttonsContainer.append(saveChanges)
  buttonsContainer.append(deleteTodo)
  todoInfoContainer.append(buttonsContainer)
  

  saveChanges.addEventListener('click', evt => {
    updateTodo(todo.id)
  })

  close.addEventListener('click', evt => {
    todoInfoContainer.remove();
    background.remove();
  })

  return todoInfoContainer;
}