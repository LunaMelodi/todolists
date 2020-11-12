export default function menuItems(list) {
  let li = document.createElement('li');
  li.setAttribute('class', 'lists-menu-item');
  li.dataset.listId = list.id;
  li.innerHTML = list.name; 
  return li;
}