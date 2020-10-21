export default async function displayTodos(todos) {
  var ul = document.querySelector('#list-items');

  ul.innerHTML='';

  todos.forEach((el, i)=> {
    const node = document.createElement("li");
    node.setAttribute('class', `todo-item`);
    node.setAttribute('data-key', el.id);
    node.innerHTML = `<input type="checkbox" id="todo${i}" name="todo" value="Todo">
                      <p class="list-text">${el['todo-content']}</p>
                      <button class="delete-todo" type="submit">x</button>`;
    ul.append(node);
  });
}

