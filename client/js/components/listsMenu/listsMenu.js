import menuItems from '/client/js/components/listsMenu/menuItems.js';

export default function listsMenu(lists) {
    let app = document.querySelector('.app');

    let menuContainer = document.createElement('section');
    menuContainer.id = 'lists-menu-container';
    
    let section = document.createElement('section');
    section.className = 'icon-header-container';

    let actionsContainer = document.createElement('section');
    actionsContainer.id = 'lists-menu-actions';

    let addListIcon = document.createElement('span');
    addListIcon.classList.add('material-icons', 'add-list-icon', 'md-36');
    addListIcon.innerHTML = 'post_add';

    let shareIcon = document.createElement('span');
    shareIcon.classList.add('material-icons', 'share-icon', 'md-36');
    shareIcon.innerHTML = 'share';
    
    actionsContainer.append(addListIcon)
    actionsContainer.append(shareIcon)

    let ulContainer = document.createElement('div');
    
    let header = document.createElement('span');
    header.id = 'lists-menu-header';
    header.innerHTML = 'My Lists';

    let exitIcon = document.createElement('span');
    exitIcon.classList.add('material-icons', 'exit-icon', 'md-36');
    exitIcon.innerHTML = 'exit_to_app';

    let ul = document.createElement('ul');
    ul.className = 'lists-menu';
    
    lists.forEach(list => {
        let li = menuItems(list);
        ul.append(li);
    });

    section.append(header);
    section.append(exitIcon);
    
    ulContainer.append(ul);

    menuContainer.prepend(section);
    menuContainer.append(actionsContainer);
    menuContainer.append(ulContainer);
    
    app.append(menuContainer);

    exitIcon.addEventListener('click', e => {
        menuContainer.remove();
    })
}