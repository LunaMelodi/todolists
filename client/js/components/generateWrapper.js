export default function generateWrapper() {
  const itself = document.querySelector('.wrapper');
  if(itself) {
    itself.remove();
  }
  let appBox = document.querySelector('.app');
  let wrapper = document.createElement('div');
  wrapper.setAttribute('class', 'wrapper');
  appBox.append(wrapper);
}