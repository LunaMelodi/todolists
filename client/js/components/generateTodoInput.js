export default function generateTodoInput(e) {   //this function is called in app.js

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
    inputDescription.setAttribute('maxlength', 450)
    

    let inputDueDate = document.createElement('input');
    inputDueDate.setAttribute('id', 'add-todo-duedate');
    inputDueDate.setAttribute('type', 'text');
    inputDueDate.setAttribute('placeholder', 'Due ');

    let button = document.createElement('button');
    button.setAttribute('class', 'submit-todo-button');
    button.setAttribute('type', 'submit');
    button.innerHTML = 'Create Todo';
    
    form.prepend(inputTitle)
    form.append(inputDescription)
    form.append(inputDueDate)
    
    form.append(button);
    mainForm.append(form);
    e.target.closest('.main-list-header').after(mainForm); //appends it after the wrapper header block.
    
}