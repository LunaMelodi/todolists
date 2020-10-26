export default function generateTodoInput(e) {
    //let wrapper = document.querySelector('.wrapper');
    //let addButton = document.querySelector('add-button')

    let mainForm = document.createElement('section');
    mainForm.setAttribute('class', 'main-form');

    let form = document.createElement('form');
    form.setAttribute('id', 'add-todo-form');

    let inputTitle = document.createElement('input');
    inputTitle.setAttribute('id', 'add-todo-title');
    inputTitle.setAttribute('type', 'text');
    inputTitle.setAttribute('placeholder', 'Title');

    let inputDescription = document.createElement('input');
    inputDescription.setAttribute('id', 'add-todo-description');
    inputDescription.setAttribute('type', 'text');
    inputDescription.setAttribute('placeholder', 'Add a todo here!');

    let button = document.createElement('button');
    button.setAttribute('class', 'submit-todo-button');
    button.setAttribute('type', 'submit');
    button.innerHTML = 'Create Todo';
    
    form.prepend(inputTitle)
    form.append(inputDescription)
    
    form.append(button);
    mainForm.append(form);
    e.target.after(mainForm);
    
}