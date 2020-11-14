<<<<<<< HEAD
import newbutton from '/client/js/components/listTodos/todoModalW/newbutton.js';
=======
import newbutton from '/client/js/components/todoModalW/newbutton';
>>>>>>> todosAPI

export default function editList(title = 'title') {
    let wrapper = document.querySelector('.wrapper');
    
    let editListContainer = document.createElement('div');
    editListContainer.className = 'edit-list-container';

    let editTitle = document.createElement('input');
    editTitle.setAttribute('placeholder', title);

    let close = newbutton( '[x]', 0, 'close-modal-button');

    editListContainer.append(editTitle)
    editListContainer.append(close)

    
    wrapper.prepend(editListContainer);

    close.addEventListener('click', evt => {
        editListContainer.remove();
      })
}