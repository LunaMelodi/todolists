import menuItems from '/client/js/components/listsMenu/menuItems.js';
import addNewList from '/client/js/components/listsMenu/addNewList.js';
import requestLists from '/client/js/requests/requestLists.js'; 
import listTodos from '/client/js/components/listTodos/listTodos.js';

export default function listsMenu(lists) {
    const itself = document.querySelector('#lists-menu-container');
    if(itself) {
      itself.remove();
    }  
    let app = document.querySelector('.app');

    let menuContainer = document.createElement('section');
    menuContainer.id = 'lists-menu-container';
    
    let iconHeaderContainer = document.createElement('section');
    iconHeaderContainer.className = 'icon-header-container';

    let ulContainer = document.createElement('div');
    ulContainer.classList.add('ul-lists-container')
    
    let header = document.createElement('span');
    header.id = 'lists-menu-header';
    header.innerHTML = 'My Lists';

    let exitIcon = document.createElement('span');
    exitIcon.classList.add('material-icons', 'exit-icon', 'md-36');
    exitIcon.innerHTML = 'exit_to_app';
    
    let addListInputContainer = addNewList();

    let ul = document.createElement('ul');
    ul.className = 'lists-menu';
    
    lists.forEach(list => {
        let li = menuItems(list);
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
        if(e.target.classList.contains('lists-menu-item')) {
            let listId = e.target.dataset.listId;
            let list = await requestLists.get(listId);
            listTodos(list.data);
        }
    })

    exitIcon.addEventListener('click', e => { // this closes the lists navbar. 
        menuContainer.style.width = '0';
    })
}