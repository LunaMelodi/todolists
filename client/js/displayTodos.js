export default async function displayTodos(todos) {
  var ul = document.querySelector('#list-items');

  ul.innerHTML='';

  todos.forEach((el, i)=> {
    const node = document.createElement("li");
    node.setAttribute('class', `todo-item`);
    node.setAttribute('data-key', el.id);
    node.innerHTML = `<label class="checkbox-container">
                      <input class="todo-checkbox" type="checkbox" >
                      <span class="checkmark"></span>
                      </label>
                      <p class="list-text">${el['todo-content']}</p>
                      <button class="delete-todo" type="submit">x</button>`;
                      
    ul.append(node);
  });
}

