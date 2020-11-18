import listsMenu from '/client/js/components/listsMenu/listsMenu.js';
import requestLists from '/client/js/requests/requestLists.js'; 
import settingsWindow from '/client/js/components/settings/settingsWindow.js';


export default async function headBar() {
    const itself = document.querySelector('#head-bar');
    if(itself) {
      itself.remove();
    }
    let header = document.createElement('header');
    header.id = 'head-bar';
    
    let settingsIcon = document.createElement('span'); 
    settingsIcon.classList.add('material-icons', 'settings-icon', 'md-24', 'md-light')
    settingsIcon.innerHTML = 'settings';
    
    let appName = document.createElement('span'); 
    appName.className = 'app-name-header';
    appName.innerHTML = 'TodoLists';

    let listIcon = document.createElement('span'); 
    listIcon.classList.add('material-icons', 'list-icon', 'md-24', 'md-light')
    listIcon.innerHTML = 'list';
  
    header.append(listIcon);
    header.append(appName);
    header.append(settingsIcon);
    let app = document.querySelector('.app');
    app.prepend(header);
    
    let lists = await requestLists.getAll(); 
    console.log(lists.data)

    if(lists.data){
      listsMenu(lists.data); // the navbar is added to the page.  
    let menu = document.querySelector('#lists-menu-container');
        menu.style.width = '0';   //immediately set "width: 0" to hide it.
    const listsHandler = () => { // on event the elem will transition to the width declared in the stylesheet. 
        menu.style.width = '';  
    }
    
    listIcon.addEventListener('click', listsHandler);

    settingsIcon.addEventListener('click', e => {
        let wrapperFirstChild = document.querySelector('.wrapper').firstChild;
        wrapperFirstChild.classList.contains('edit-list-container') ? wrapperFirstChild.remove() : null; //if that elem is there remove it to avoid overlapping
        settingsWindow();
    })

    return lists.data;
    } else {
      return [];
    }
    
}