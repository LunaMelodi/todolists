import requestLists from '/client/js/requests/requestLists.js';
import listTodos from '/client/js/components/listTodos/listTodos.js';

export default function addNewList() {

    let container = document.createElement('section');
    container.classList.add('add-list-container');

    let input = document.createElement('input');
    input.classList.add('add-list-input');
    input.setAttribute('type', 'text');
    input.setAttribute('maxlength', 25);
    input.setAttribute('placeholder', 'New list');
    
    let plusIcon = document.createElement('span');
    plusIcon.classList.add('material-icons', 'plus-list-icon', 'md-24');
    plusIcon.innerHTML = 'add';

    container.append(input);
    container.append(plusIcon);

    plusIcon.addEventListener('click', async e => {
      if(e.target === plusIcon){
        const sibling = e.target.previousElementSibling;
        let res = await requestLists.post(sibling);
      }
    });
    return container;
}