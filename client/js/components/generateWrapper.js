export default function generateWrapper() {
  let appBox = document.querySelector('.app');
  let wrapper = document.createElement('div');
  wrapper.setAttribute('class', 'wrapper');
  appBox.append(wrapper);
}