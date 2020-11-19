import newbutton from '/client/js/components/listTodos/todoModalW/newbutton.js';
import requestLists from '/client/js/requests/requestLists.js';
import generateApp from '/client/js/generateApp.js';

export default function editList(list) {
    let wrapper = document.querySelector('.wrapper');
    
    let editListContainer = document.createElement('div');
    editListContainer.className = 'edit-list-container';

    let editTitle = document.createElement('input');
    editTitle.value = list.name;
    editTitle.setAttribute('placeholder', list.name);

    let close = newbutton( '[x]', 0, 'close-modal-button');

    let deleteList = newbutton('delete', 'delete-list-button', 0);

    let updateList = newbutton('update', 'update-list-button', 0);

    editListContainer.append(editTitle);
    editListContainer.append(close);
    editListContainer.append(updateList);
    editListContainer.append(deleteList);
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

    updateList.addEventListener('click', e => {
      const value = editTitle.value;
      requestLists.put(value);
    })
}