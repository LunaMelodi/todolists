import newbutton from '/client/js/components/todoModalW/newbutton';

export default function editList(title = 'title') {
  const wrapper = document.querySelector('.wrapper');

  const editListContainer = document.createElement('div');
  editListContainer.className = 'edit-list-container';

  const editTitle = document.createElement('input');
  editTitle.setAttribute('placeholder', title);

  const close = newbutton('[x]', 0, 'close-modal-button');

  editListContainer.append(editTitle);
  editListContainer.append(close);

  wrapper.prepend(editListContainer);

  close.addEventListener('click', (evt) => {
    editListContainer.remove();
  });
}
