import menuItems from '/client/js/components/listsMenu/menuItems';
import addNewList from '/client/js/components/listsMenu/addNewList';

export default function listsMenu(lists) {
  const app = document.querySelector('.app');

  const menuContainer = document.createElement('section');
  menuContainer.id = 'lists-menu-container';

  const iconHeaderContainer = document.createElement('section');
  iconHeaderContainer.className = 'icon-header-container';

  const ulContainer = document.createElement('div');
  ulContainer.classList.add('ul-lists-container');

  const header = document.createElement('span');
  header.id = 'lists-menu-header';
  header.innerHTML = 'My Lists';

  const exitIcon = document.createElement('span');
  exitIcon.classList.add('material-icons', 'exit-icon', 'md-36');
  exitIcon.innerHTML = 'exit_to_app';

  const addListInputContainer = addNewList();

  const ul = document.createElement('ul');
  ul.className = 'lists-menu';

  lists.forEach((list) => {
    const li = menuItems(list);
    ul.append(li);
  });

  iconHeaderContainer.append(header);
  iconHeaderContainer.append(exitIcon);

  ulContainer.append(ul);

  menuContainer.prepend(iconHeaderContainer);
  menuContainer.append(addListInputContainer);
  menuContainer.append(ulContainer);

  app.append(menuContainer);

  ul.addEventListener('click', async (e) => {
    if (e.target.classList.contains('lists-menu-item')) {
      const { listId } = e.target.dataset;
      const list = await requestLists.get(listId);
      listTodos(list.list);
    }
  });

  exitIcon.addEventListener('click', (e) => { // this closes the lists navbar.
    menuContainer.style.width = '0';
  });
}
