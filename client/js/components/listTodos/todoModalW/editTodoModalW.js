import newbutton from '/client/js/components/listTodos/todoModalW/newbutton.js';
import requestTodos from '/client/js/requests/requestTodos.js';
import todoModalW from '/client/js/components/listTodos/todoModalW/todoModalW.js';
import displayTodos from '/client/js/components/listTodos/displayTodos.js';

export default function editTodoModalW(todo, listId) {
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
  changeTodoTitle.setAttribute('type', 'text');

  let labelTitle = document.createElement('label');
  labelTitle.setAttribute('for', 'modal-todo-title');
  labelTitle.innerHTML = 'Todo ';

  let changeTodoDescription = document.createElement('textarea');
  changeTodoDescription.className = 'modal-todo-description';
  changeTodoDescription.id = 'modal-todo-description';
  changeTodoDescription.value = todo.note;
  changeTodoDescription.setAttribute('maxlength', 249)

  let editDescriptionIcon = document.createElement('label');
  editDescriptionIcon.setAttribute('for', 'modal-todo-description');
  editDescriptionIcon.classList.add('material-icons', 'edit-icon', 'md-24', 'md-dark');
  editDescriptionIcon.innerHTML = 'edit';

  let close = newbutton('[x]', 'close-modal-button', 'close-modal-button');
  let saveChanges = newbutton('save', 'save-modal-button', 'save-modal-button');

  todoInfoContainer.prepend(labelTitle)
  todoInfoContainer.append(changeTodoTitle)
  todoInfoContainer.append(editDescriptionIcon)
  todoInfoContainer.append(changeTodoDescription)

  todoInfoContainer.append(close)
  buttonsContainer.append(saveChanges)
  todoInfoContainer.append(buttonsContainer)


  saveChanges.addEventListener('click', async () => {
    const data = {
      title: changeTodoTitle.value,
      note: changeTodoDescription.value
    }
    let response = await requestTodos.put(listId, todo.id, data);
    if (response) {
      let freshTodo = await requestTodos.get(listId, todo.id);
      todoModalW(freshTodo.data, listId);
      let todos = JSON.parse(sessionStorage.getItem('currentListTodos'));
      const todoToUpdateIndex = todos.findIndex(elem => { return todo.id === elem.id })
      todos.splice(todoToUpdateIndex, 1, freshTodo.data);
      sessionStorage.currentListTodos = JSON.stringify(todos);
      displayTodos(todos)
    }
  })

  close.addEventListener('click', evt => {
    todoInfoContainer.remove();
    background.remove();
  })

  return todoInfoContainer;
}