import editList from '/client/js/components/editList/editList.js';

export default function generateHeader(text = 'TodoList') {
  let wrapper = document.querySelector('.wrapper');

  let h1Container = document.createElement('section');
  h1Container.className = 'main-list-header';

  let editIcon = document.createElement('span');
  editIcon.classList.add('material-icons', 'md-24', 'md-dark');
  editIcon.id = 'edit-icon-list-header';
  editIcon.innerHTML = 'edit';

  let h1 = document.createElement('h1');
  h1.innerHTML = text;
  
  h1Container.append(h1);
  h1Container.append(editIcon);

  wrapper.append(h1Container)
  
  editIcon.addEventListener('click', e => {
    editList()
  })
}
