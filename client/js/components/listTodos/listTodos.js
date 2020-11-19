import displayTodos from '/client/js/components/listTodos/displayTodos.js';
import generateHeader from '/client/js/components/listTodos/generateHeader.js';
import generateList from '/client/js/components/listTodos/generateList.js';

export default function listTodos(list) { // function for displaying the list with all its todos
  const itself = document.querySelector('#list-todos-container');
  const noListsW = document.querySelector('#no-list-container');
  if(itself) {
    itself.remove();
  } else if(noListsW) {
    noListsW.remove();
  }
  let wrapper = document.querySelector('.wrapper'); 
  let container = document.createElement('div');
  container.id = 'list-todos-container';
  wrapper.append(container);

  generateHeader(list);
  generateList(list.listId);
  displayTodos(list.todos);
    
  return 1;
}