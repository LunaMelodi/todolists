import displayTodos from '/client/js/components/listTodos/displayTodos.js';
import generateHeader from '/client/js/components/listTodos/generateHeader.js';
import generateList from '/client/js/components/listTodos/generateList.js';

export default function listTodos(list) { // function for displaying the list with all its todos
    let wrapper = document.querySelector('.wrapper');
    //wrapper.firstChild.remove() // to avoid overlaping we are going to remove this component (or any other inside .wrapper) before remounting it.

    let container = document.createElement('div');
    container.id = 'list-todos-container';
    wrapper.append(container);

    generateHeader(list.name);
    generateList(list.id);
    displayTodos(list.todos);
    
    return 1;
}