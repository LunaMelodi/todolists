import newbutton from '/client/js/components/todoModalW/newbutton';
import updateTodo from '/client/js/updateTodo';

export default function editTodoModalW(todo) {
  const background = document.querySelector('.modal-todo-background');

  const todoInfoContainer = document.createElement('div');
  todoInfoContainer.setAttribute('class', 'todo-info-container');
  const buttonsContainer = document.createElement('div');
  buttonsContainer.setAttribute('class', 'buttons-container');

  const changeTodoTitle = document.createElement('input');
  changeTodoTitle.className = 'modal-todo-title';
  changeTodoTitle.id = 'modal-todo-title';
  changeTodoTitle.value = todo.title;
  changeTodoTitle.setAttribute('placeholder', '...');
  changeTodoTitle.setAttribute('type', 'text');

  const labelTitle = document.createElement('label');
  labelTitle.setAttribute('for', 'modal-todo-title');
  labelTitle.innerHTML = 'Todo ';

  const changeTodoDescription = document.createElement('textarea');
  changeTodoDescription.className = 'modal-todo-description';
  changeTodoDescription.id = 'modal-todo-description';
  changeTodoDescription.value = todo.description;
  changeTodoDescription.setAttribute('maxlength', 450);

  const editDescriptionIcon = document.createElement('label');
  editDescriptionIcon.setAttribute('for', 'modal-todo-description');
  editDescriptionIcon.classList.add('material-icons', 'edit-icon', 'md-24', 'md-dark');
  editDescriptionIcon.innerHTML = 'edit';

  const changeTodoDueDate = document.createElement('input');
  changeTodoDueDate.className = 'modal-todo-duedate';
  changeTodoDueDate.id = 'modal-todo-duedate';
  changeTodoDueDate.setAttribute('type', 'text');
  changeTodoDueDate.value = todo.duedate;

  const labelDueDate = document.createElement('label');
  labelDueDate.setAttribute('for', 'modal-todo-duedate');
  labelDueDate.classList.add('material-icons', 'event-icon', 'md-24', 'md-dark');
  labelDueDate.innerHTML = 'event';

  const close = newbutton('[x]', 'close-modal-button', 'close-modal-button');
  const saveChanges = newbutton('save', 'save-modal-button', 'save-modal-button');
  const deleteTodo = newbutton('delete todo', 'daleteTodo-modal-button', 'daleteTodo-modal-button');

  todoInfoContainer.prepend(labelTitle);
  todoInfoContainer.append(changeTodoTitle);
  todoInfoContainer.append(editDescriptionIcon);
  todoInfoContainer.append(changeTodoDescription);
  todoInfoContainer.append(labelDueDate);
  todoInfoContainer.append(changeTodoDueDate);

  todoInfoContainer.append(close);
  buttonsContainer.append(saveChanges);
  buttonsContainer.append(deleteTodo);
  todoInfoContainer.append(buttonsContainer);

  saveChanges.addEventListener('click', (evt) => {
    requestTodos.put(todo.id);
  });

  close.addEventListener('click', (evt) => {
    todoInfoContainer.remove();
    background.remove();
  });

  return todoInfoContainer;
}
