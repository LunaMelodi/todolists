export default function addTodoButton() {
    let wrapper = document.querySelector('.wrapper');
    let button = document.createElement('button');
    button.setAttribute('id', 'add-button');
    button.innerHTML = 'Add Todo';
    wrapper.append(button);
}