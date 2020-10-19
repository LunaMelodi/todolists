import getTodos from '/client/js/getTodos.js';

export default async function displayTodos() {
  var todos = await getTodos();
  console.log('todos :>> ', todos);

  var ul = document.querySelector('#list-items');

  ul.innerHTML='';

  todos.forEach(el => {
    ul.innerHTML += `<li class='todo-item'>${el['todo-content']}</li>`;
  });
}
