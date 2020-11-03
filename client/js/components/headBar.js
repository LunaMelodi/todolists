import listsMenu from '/client/js/components/listsMenu/listsMenu.js';
import theLists from '/client/js/getLists.js';

export default function headBar() {
    let header = document.createElement('header'); 
    
    let settingsIcon = document.createElement('span'); 
    settingsIcon.classList.add('material-icons', 'settings-icon', 'md-24', 'md-light')
    settingsIcon.innerHTML = 'settings';
    
    let listIcon = document.createElement('span'); 
    listIcon.classList.add('material-icons', 'list-icon', 'md-24', 'md-light')
    listIcon.innerHTML = 'list';
  
    header.append(listIcon);
    header.append(settingsIcon);
    let app = document.querySelector('.app');
    app.prepend(header);
    
    const listsHandler = () => { listsMenu(theLists) }
    
    listIcon.addEventListener('click', listsHandler);
}