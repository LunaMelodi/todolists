import newbutton from '/client/js/components/todoModalW/newbutton';

export default function settingsWindow() {
  const wrapper = document.querySelector('.wrapper');

  const settingsContainer = document.createElement('div');
  settingsContainer.className = 'settings-container';

  const close = newbutton('[x]', 0, 'close-modal-button');

  settingsContainer.append(close);

  wrapper.prepend(settingsContainer);

  close.addEventListener('click', (evt) => {
    settingsContainer.remove();
  });
}
