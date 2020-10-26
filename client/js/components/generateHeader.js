export default function generateHeader(text) {
  if(!text) {
    text = 'TodoList'
  }
  let wrapper = document.querySelector('.wrapper');
  let h1Container = document.createElement('section');
  let h1 = document.createElement('h1');
  h1.innerHTML = text;
  h1Container.className = 'header';
  h1Container.append(h1);
  wrapper.append(h1Container)
}