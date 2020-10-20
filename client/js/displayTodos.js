export default async function displayTodos(todos) {
  var ul = document.querySelector('#list-items');

  ul.innerHTML='';

  todos.forEach((el, i)=> {
    ul.innerHTML += `<li class='todo-item'><input type="checkbox" id="todo${i}" name="todo" value="Todo"><p class="list-text">${el['todo-content']}</p><button id="btn${el.id}" onclick="deleteTodo(${el.id})">x</button></li>`;
  });
}
