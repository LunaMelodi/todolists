export default async function displayTodos(todos) {
    var ul = document.querySelector('#list-items');
    ul.innerHTML='';

    function elementCreator(todo, appendTo) {
      const li = document.createElement('li');
      li.setAttribute('class', 'todo-item');
      li.setAttribute('data-key', todo.id);
      li.dataset.completed = todo.isCompleted ? 1 : 0; 

      const checkbox = document.createElement('label');
      checkbox.setAttribute('class', 'checkbox-container');
      checkbox.innerHTML = `<input class="todo-checkbox" type="checkbox" ${todo.isCompleted ? 'checked' : ''}>
                            <span class="checkmark"></span>`;

      const todoText = document.createElement('div');
      todoText.setAttribute('class', 'list-text');
      todoText.innerHTML = `<p class="todo-title">${todo.title}</p>
                            <span class="todo-note">${todo.note ?? '. . .'}</span>`;
      
      const button = document.createElement('button');
      button.setAttribute('class', 'delete-todo');
      button.innerHTML = 'x';

      li.append(checkbox);
      li.append(todoText);
      li.append(button);
      appendTo.append(li);

    }
    todos.forEach((el)=> {
      elementCreator(el, ul); 
    });
}