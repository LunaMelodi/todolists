export default function generateTodoInput() {
    let wrapper = document.querySelector('.wrapper');

    let mainForm = document.createElement('section');
    mainForm.setAttribute('class', 'main-form');

    let form = document.createElement('form');
    let inputContainer = document.createElement('div');
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
    button.setAttribute('class', 'add-button');
    button.setAttribute('type', 'submit');
    button.innerHTML = 'Add Todo';
    
    inputContainer.append(inputTitle)
    inputContainer.append(inputDescription)
    
    form.prepend(inputContainer);
    form.append(button);
    mainForm.append(form);
    wrapper.append(mainForm);
    
}