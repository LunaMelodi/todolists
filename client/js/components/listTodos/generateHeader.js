import editList from '/client/js/components/editList/editList';
import generateTodoInput from '/client/js/components/generateTodoInput';

export default function generateHeader(text = 'TodoList') {
  const listTodos = document.querySelector('#list-todos-container');

  const h1Container = document.createElement('section');
  h1Container.className = 'main-list-header';

  const iconsContainer = document.createElement('section');
  iconsContainer.className = 'wrapper-header-icons';

  const plusIcon = document.createElement('span');
  plusIcon.classList.add('material-icons', 'md-dark', 'md-36');
  plusIcon.id = 'add-button';
  plusIcon.innerHTML = 'add';

  const editIcon = document.createElement('span');
  editIcon.classList.add('material-icons', 'md-24', 'md-dark');
  editIcon.id = 'edit-icon-list-header';
  editIcon.innerHTML = 'edit';

  const h1 = document.createElement('h1');
  h1.innerHTML = text;

  iconsContainer.append(plusIcon);
  iconsContainer.append(editIcon);
  h1Container.append(iconsContainer);
  h1Container.append(h1);

  listTodos.prepend(h1Container);

  editIcon.addEventListener('click', (e) => {
    const wrapperFirstChild = document.querySelector('.wrapper').firstChild;
    wrapperFirstChild.classList.contains('settings-container') ? wrapperFirstChild.remove() : null; // if that elem is there remove it to avoid overlapping
    editList();
  });

  const setActiveState = (e) => { // toggles CSS selector to prevent the box from displaying repeatedly, to add transition to icon and to remove the box.
    if (e.target.classList.contains('active')) {
      const mainForm = document.querySelector('.main-form');
      mainForm.remove();
      e.target.classList.remove('active');
    } else {
      generateTodoInput(e);
      e.target.classList.add('active');
    }
  };

  plusIcon.addEventListener('click', setActiveState); // displays the input fields to add a new todo.
}
