import newbutton from '/client/js/components/todoModalW/newbutton';
import editTodoModalW from '/client/js/components/todoModalW/editTodoModalW';

export default function todoModalW(todo) {
  const { body } = document;

  const windowBackground = document.createElement('div');
  windowBackground.className = 'modal-todo-background';

  const todoInfoContainer = document.createElement('div');
  todoInfoContainer.setAttribute('class', 'todo-info-container');

  const todoTitle = document.createElement('h1');
  todoTitle.className = 'modal-todo-title';
  todoTitle.innerHTML = todo.title;

  const todoDescription = document.createElement('p');
  todoDescription.className = 'modal-todo-description';
  todoDescription.innerHTML = todo.description;

  const todoDueDate = document.createElement('span');
  todoDueDate.className = 'modal-todo-duedate';
  todoDueDate.innerHTML = `Due date: ${todo.duedate}`;

  const edit = newbutton('edit', 'edit-main-button', 'edit-todo-button');
  const close = newbutton('[x]', 'close-modal-button', 'close-modal-button');

  todoInfoContainer.prepend(todoTitle);
  todoInfoContainer.append(todoDescription);
  todoInfoContainer.append(todoDueDate);
  todoInfoContainer.append(edit);
  todoInfoContainer.append(close);

  windowBackground.append(todoInfoContainer);
  body.prepend(windowBackground);

  edit.addEventListener('click', (evt) => {
    const editWindow = editTodoModalW(todo);
    todoInfoContainer.replaceWith(editWindow);
  });

  close.addEventListener('click', (evt) => {
    windowBackground.remove();
  });
  return 1;
}
