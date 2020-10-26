export default async function displayTodos(todos) {
  var ul = document.querySelector('#list-items');

  ul.innerHTML='';
  function elementCreator(todo, appendTo) {
    const node = document.createElement("li");
    node.setAttribute('class', `todo-item`);
    node.setAttribute('data-key', todo.id);
    node.innerHTML = `<label class="checkbox-container">
                      <input class="todo-checkbox" type="checkbox" >
                      <span class="checkmark"></span>
                      </label>
                      <p class="list-text">${todo['todo-content']}</p>
                      <button class="delete-todo" type="submit">x</button>`;
    appendTo.append(node);
  }
  if(todos) {
    todos.forEach((el)=> {
      elementCreator(el, ul);
      if(el.subtodos) {
        const sublist = document.createElement("ul");
        elementCreator(todo, sublist)
      }
    });
  }
}

