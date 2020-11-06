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

    listsMenu(theLists); // the navbar is added to the page.  
    let menu = document.querySelector('#lists-menu-container');
        menu.style.width = '0';   //immediately set "width: 0" to hide it.
    const listsHandler = () => { // on click the elem will transition to the width declared in the stylesheet. 
        menu.style.width = '';  
    }
    
    listIcon.addEventListener('click', listsHandler);
}