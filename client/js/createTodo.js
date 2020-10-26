import getTodos from '/client/js/getTodos.js';

export default function createTodo() {
  var addTodoTitle = document.getElementById("add-todo-title");
  var addTodoDescription = document.getElementById("add-todo-description")


  let titleValue = addTodoTitle.value.trim();
  let descriptionValue = addTodoDescription.value.trim();
    if(titleValue === '') {
        alert('Give it a title!')
        return 0
    }
  var data = new URLSearchParams();
  data.append('title', titleValue);
  data.append('description', descriptionValue);

 
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