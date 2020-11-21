import requestTodos from '/client/js/requests/requestTodos.js';
import displayTodos from '/client/js/components/listTodos/displayTodos.js';
import requestLists from '/client/js/requests/requestLists.js';

export default function generateTodoInput(e, listId) { 

    let mainForm = document.createElement('section');
    mainForm.setAttribute('class', 'main-form');

    let form = document.createElement('form');
    form.setAttribute('id', 'add-todo-form');
    
    let inputTitle = document.createElement('input');
    inputTitle.setAttribute('id', 'add-todo-title');
    inputTitle.setAttribute('type', 'text');
    inputTitle.setAttribute('placeholder', 'Todo');
    
    let inputDescription = document.createElement('input');
    inputDescription.setAttribute('id', 'add-todo-description');
    inputDescription.setAttribute('type', 'text');
    inputDescription.setAttribute('placeholder', 'Add a note here!');
    inputDescription.setAttribute('maxlength', 249)

    let button = document.createElement('button');
    button.setAttribute('class', 'submit-todo-button');
    button.setAttribute('type', 'submit');
    button.innerHTML = 'Create Todo';
    
    form.prepend(inputTitle)
    form.append(inputDescription)
    
    form.append(button);
    mainForm.append(form);
    e.target.closest('.main-list-header').after(mainForm); //appends this component after the wrapper header block.
    
    form.addEventListener('submit', async evt => {
        evt.preventDefault();
        let freshTodo =  await requestTodos.post(inputTitle, inputDescription, listId);
        let list =  await requestLists.get(listId);
        inputTitle.value = '';
        inputDescription.value = '';
        displayTodos(list.data.todos);
        let todos = JSON.parse(sessionStorage.getItem('currentListTodos'));
        todos.push(freshTodo.data);
        sessionStorage.setItem('currentListTodos',JSON.stringify(todos));
    }) 
    
}


