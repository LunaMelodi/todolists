import listsMenu from '/client/js/components/listsMenu/listsMenu';
import settingsWindow from '/client/js/components/settings/settingsWindow';

export default async function headBar() {
  const header = document.createElement('header');

  const settingsIcon = document.createElement('span');
  settingsIcon.classList.add('material-icons', 'settings-icon', 'md-24', 'md-light');
  settingsIcon.innerHTML = 'settings';

  const appName = document.createElement('span');
  appName.className = 'app-name-header';
  appName.innerHTML = 'TodoLists';

  const listIcon = document.createElement('span');
  listIcon.classList.add('material-icons', 'list-icon', 'md-24', 'md-light');
  listIcon.innerHTML = 'list';

  header.append(listIcon);
  header.append(appName);
  header.append(settingsIcon);
  const app = document.querySelector('.app');
  app.prepend(header);

  const lists = await requestLists.getAll();

  listsMenu(lists.lists); // the navbar is added to the page.
  const menu = document.querySelector('#lists-menu-container');
  menu.style.width = '0'; // immediately set "width: 0" to hide it.
  const listsHandler = () => { // on event the elem will transition to the width declared in the stylesheet.
    menu.style.width = '';
  };

  listIcon.addEventListener('click', listsHandler);

  settingsIcon.addEventListener('click', (e) => {
    const wrapperFirstChild = document.querySelector('.wrapper').firstChild;
    wrapperFirstChild.classList.contains('edit-list-container') ? wrapperFirstChild.remove() : null; // if that elem is there remove it to avoid overlapping
    settingsWindow();
  });

  return lists.lists;
}
