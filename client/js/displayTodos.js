import updateCheckStatus from '/client/js/updateCheckStatus.js';

export default async function displayTodos(todos) {
    var ul = document.querySelector('#list-items');
    ul.innerHTML='';

<<<<<<< HEAD
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
=======
    function elementCreator(todo, appendTo) {
      const li = document.createElement('li');
      li.setAttribute('class', 'todo-item');
      li.setAttribute('data-key', todo.id);
      li.setAttribute('data-completed', todo.completed);

      const checkbox = document.createElement('label');
      checkbox.setAttribute('class', 'checkbox-container');
      checkbox.innerHTML = `<input class="todo-checkbox" type="checkbox" ${todo.completed ? 'checked' : ''}>
                            <span class="checkmark"></span>`;
>>>>>>> jsGenerated

      const todoText = document.createElement('div');
      todoText.setAttribute('class', 'list-text');
      todoText.innerHTML = `<p class="todo-title">${todo.title}</p>
                            <span class="todo-duedate">${todo.duedate}</span>`;
      
      const button = document.createElement('button');
      button.setAttribute('class', 'delete-todo');
      button.innerHTML = 'x';

      li.append(checkbox);
      li.append(todoText);
      li.append(button);
      appendTo.append(li);

      checkbox.addEventListener('click', evt => {
        updateCheckStatus(todo.id, !todo.completed);
        evt.stopPropagation()
      })
    }
    todos.forEach((el)=> {
      elementCreator(el, ul); 
    });
}