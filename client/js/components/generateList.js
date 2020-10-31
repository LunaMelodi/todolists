export default function generateList() {
    let wrapper = document.querySelector('.wrapper');

    let todoList = document.createElement('section');
    todoList.setAttribute('class', 'todo-list');

    let ul = document.createElement('ul');
    ul.setAttribute('class', 'list-items');
    ul.setAttribute('id', 'list-items');

    todoList.append(ul);
    wrapper.append(todoList);
}