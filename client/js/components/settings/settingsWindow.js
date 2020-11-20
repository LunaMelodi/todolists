import newbutton from '/client/js/components/listTodos/todoModalW/newbutton.js';
import requestAuth from '/client/js/requests/requestAuth.js';

export default function settingsWindow() {
  const itself = document.querySelector('.settings-container');
  if(itself) {
    itself.remove();
  }
  let wrapper = document.querySelector('.wrapper');
    
  let settingsContainer = document.createElement('div');
  settingsContainer.className = 'settings-container';

  let logoutButton = newbutton( 'Log out', 0, 'log-out-button');
  
  let close = newbutton( '[x]', 0, 'close-modal-button');
  
  settingsContainer.append(logoutButton);
  settingsContainer.append(close);
  wrapper.prepend(settingsContainer);

  close.addEventListener('click', () => {
    settingsContainer.remove();
  })

  logoutButton.addEventListener('click', requestAuth.logout);
}