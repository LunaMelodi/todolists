<<<<<<< HEAD:client/js/components/listTodos/todoModalW/subtodo.js
/* import newbutton from '/client/js/components/listTodos/todoModalW/newbutton.js';
=======
import editButton from '/client/js/components/todoModalW/editButton';
>>>>>>> todosAPI:client/js/components/todoModalW/subtodo.js

export default function subtodo(title, description, duedate, subTodos) {
    //let wrapper = document.querySelector('.wrapper');
  
    //let windowBackground = document.createElement('div');
    //windowBackground.className = 'modal-todo-background';
  
    let subtodoInfoContainer = document.createElement('div');
    subtodoInfoContainer.setAttribute('class', 'subtodo-info-container');
  
    let subtodoTitle = document.createElement('h5');
    subtodoTitle.className = 'modal-subtodo-title';
    subtodoTitle.innerHTML = title;
  
    let subtodoDescription = document.createElement('p');
    subtodoDescription.className = 'modal-subtodo-description';
    subtodoDescription.innerHTML = description;
  
    let subtodoDueDate = document.createElement('span');
    subtodoDueDate.className = 'modal-subtodo-duedate';
    subtodoDueDate.innerHTML = duedate;
    
    let edit = editButton('edit-subtodo-button');

    if(subTodos) {
        
    }
  }
 */