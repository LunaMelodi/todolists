import editList from '/client/js/components/editList/editList.js';
import generateTodoInput from '/client/js/components/listTodos/generateTodoInput.js'; 

export default function generateHeader(list) {
  const itself = document.querySelector('.main-list-header');
  if(itself) {
    itself.remove();
  }
  let listTodos = document.querySelector('#list-todos-container');

  let h1Container = document.createElement('section');
    h1Container.className = 'main-list-header';

  let iconsContainer = document.createElement('section');
  iconsContainer.className = 'wrapper-header-icons';

  let plusIcon = document.createElement('span');
    plusIcon.classList.add('material-icons', 'md-dark', 'md-36');
    plusIcon.id = 'add-button';
    plusIcon.innerHTML = 'add';

  let editIcon = document.createElement('span');
    editIcon.classList.add('material-icons', 'md-24', 'md-dark');
    editIcon.id = 'edit-icon-list-header';
    editIcon.innerHTML = 'edit';

  let h1 = document.createElement('h1');
    h1.innerHTML = list.name;

  iconsContainer.append(plusIcon);
  iconsContainer.append(editIcon);
  h1Container.append(iconsContainer)
  h1Container.append(h1);
  
  listTodos.prepend(h1Container)
  
  editIcon.addEventListener('click', e => {
    let wrapperFirstChild = document.querySelector('.wrapper').firstChild;
    wrapperFirstChild.classList.contains('settings-container') ? wrapperFirstChild.remove() : null; //if that elem is there remove it to avoid overlapping
    editList(list)
  })

  const setActiveState = e => {  // toggles CSS selector to prevent the box from displaying repeatedly, to add transition to icon and to remove the box. 
    if(e.target.classList.contains('active')) {
      let mainForm = document.querySelector('.main-form');
      mainForm.remove();
      e.target.classList.remove('active');
    } else {
      generateTodoInput(e, list.listId);
      e.target.classList.add('active');
    }
  }

  plusIcon.addEventListener('click', setActiveState);  // displays the input fields to add a new todo.
  
}
