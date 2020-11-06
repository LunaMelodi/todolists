import newbutton from '/client/js/components/todoModalW/newbutton.js';

export default function editList(title = 'title') {
    let wrapper = document.querySelector('.wrapper');
    
    let editListContainer = document.createElement('div');
    editListContainer.className = 'edit-list-container';

    let editTitle = document.createElement('input');
    editTitle.setAttribute('placeholder', title);

    let close = newbutton( '[x]', 0, 'close-modal-button');

    editListContainer.append(editTitle)
    editListContainer.append(close)

    
    wrapper.append(editListContainer);

    close.addEventListener('click', evt => {
        editListContainer.remove();
      })
}