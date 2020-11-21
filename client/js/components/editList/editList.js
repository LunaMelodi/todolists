import newbutton from '/client/js/components/listTodos/todoModalW/newbutton.js';
import requestLists from '/client/js/requests/requestLists.js';
import generateApp from '/client/js/generateApp.js';

export default function editList(list) {
    let wrapper = document.querySelector('.wrapper');
    
    let editListContainer = document.createElement('div');
    editListContainer.className = 'edit-list-container';

    let editTitle = document.createElement('input');
    editTitle.value = list.name;
    editTitle.id = 'edit-list-title';
    editTitle.setAttribute('placeholder', list.name);
    editTitle.setAttribute('type', 'text');

    let editTitleLabel = document.createElement('label');
    editTitleLabel.classList.add('material-icons', 'edit-list-name-icon', 'md-48', 'md-dark');
    editTitleLabel.innerHTML = 'edit';

    let close = newbutton( '[x]', 0, 'close-modal-button');

    let buttonsContainer = document.createElement('section');
    buttonsContainer.className = 'editList-buttons-container';

    let deleteList = newbutton('delete', 'delete-list-button', 0);

    let updateList = newbutton('update', 'update-list-button', 0);

    buttonsContainer.append(updateList)
    buttonsContainer.append(deleteList)
    editListContainer.append(editTitleLabel);
    editListContainer.append(editTitle);
    editListContainer.append(close);
    editListContainer.append(buttonsContainer);
  
    wrapper.prepend(editListContainer);

    close.addEventListener('click', evt => {
        editListContainer.remove();
    })

    deleteList.addEventListener('click', async e => {
      let res = await requestLists.delete(list.listId);
      if(res) {
        let menuListItems = document.querySelectorAll('.lists-menu-item');
        for(let item of menuListItems) {
          item.dataset.listId == list.id ? item.remove() : null;
        }
      generateApp();
      }
    })

    updateList.addEventListener('click', async () => {
      const editListInputElem = document.querySelector('#edit-list-title')
      await requestLists.put(list.listId, editListInputElem.value);
      document.querySelector('.main-list-header h1').innerHTML = editListInputElem.value;
    })
}