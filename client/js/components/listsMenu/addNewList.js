import requestLists from '/client/js/requests/requestLists.js';

export default function addNewList() {

    let container = document.createElement('section');
    container.id = 'add-list-container';

    let input = document.createElement('input');
    input.id = 'add-list-input';
    input.setAttribute('type', 'text');
    input.setAttribute('maxlength', 25);
    input.setAttribute('placeholder', 'New list');
    
    let plusIcon = document.createElement('span');
    plusIcon.classList.add('material-icons', 'plus-list-icon', 'md-24');
    plusIcon.innerHTML = 'add';

    container.append(input);
    container.append(plusIcon);
    
    plusIcon.addEventListener('click', requestLists.post);
    return container;
}