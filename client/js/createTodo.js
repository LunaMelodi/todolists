import getTodos from '/client/js/getTodos.js';

export default function createTodo() {
  var addTodoInput = document.getElementById("add-todo")
  let inputValue = addTodoInput.value.trim();
    if(inputValue === '') {
        alert('Add something!')
        return 0
    }
  var data = new URLSearchParams();
  data.append("todo-content", inputValue);
 
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
 
  

  addTodoInput.value = "";
  
  // (C) PREVENT HTML FORM SUBMIT
  return false;
}