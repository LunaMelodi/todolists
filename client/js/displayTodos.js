export default async function displayTodos(todos) {
  var ul = document.querySelector('#list-items');

  ul.innerHTML='';

  todos.forEach(el => {
    ul.innerHTML += `<li class='todo-item'>${el['todo-content']}</li>`;
  });
}
