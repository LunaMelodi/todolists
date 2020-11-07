export default function addTodoButton() {
    let wrapper = document.querySelector('.wrapper');
    let button = document.createElement('button');
    button.id = 'add-button';
    button.innerHTML = '+';
    wrapper.append(button);
}