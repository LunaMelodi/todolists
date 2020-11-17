import newbutton from '/client/js/components/listTodos/todoModalW/newbutton.js';

export default function settingsWindow() {
  const itself = document.querySelector('.settings-container');
  if(itself) {
    itself.remove();
  }
  let wrapper = document.querySelector('.wrapper');
    
  let settingsContainer = document.createElement('div');
  settingsContainer.className = 'settings-container';

  let close = newbutton( '[x]', 0, 'close-modal-button');

  settingsContainer.append(close)
  wrapper.prepend(settingsContainer);

  close.addEventListener('click', evt => {
    settingsContainer.remove();
  })
}