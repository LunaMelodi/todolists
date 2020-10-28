import getTodos from '/client/js/getTodos.js';

export default function createTodo() {
  var addTodoTitle = document.getElementById("add-todo-title");
  var addTodoDescription = document.getElementById("add-todo-description")
  var addTodoDuedate = document.getElementById("add-todo-duedate")


  let titleValue = addTodoTitle.value.trim();
  let descriptionValue = addTodoDescription.value.trim();
  let dueDateValue = addTodoDuedate.value;
    if(titleValue === '') {
        alert('Give it a title!')
        return 0
    }
  var data = new URLSearchParams();
  data.append('title', titleValue);
  data.append('description', descriptionValue);
  data.append('dueDate', dueDateValue);


 
  // (B) FETCH
  fetch("http://localhost:8080/api/todos", {
    method: 'post',
    body: data
  })
  .then (res => res.text())
  .then (text => {
    console.log(text);
    getTodos();
  })
  .catch (error => console.log(error))
 
  

  addTodoTitle.value = "";
  addTodoDescription.value = "";
  // (C) PREVENT HTML FORM SUBMIT
  return false;
}