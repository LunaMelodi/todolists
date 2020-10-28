export default function updateTodo(id) {
    var editTodoTitle = document.getElementById("modal-todo-title");
    var editTodoDescription = document.getElementById("modal-todo-description");
    var editTodoDuedate = document.getElementById("modal-todo-duedate");
  
  
    let titleValue = editTodoTitle.value.trim();
    let descriptionValue = editTodoDescription.value.trim();
    let dueDateValue = editTodoDuedate.value;
      if(titleValue === '') {
          alert('Give it a title!')
          return 0
      }
    var data = new URLSearchParams();
    data.append('title', titleValue);
    data.append('description', descriptionValue);
    data.append('dueDate', dueDateValue);
  
  
    fetch(`http://localhost:8080/api/todos/${id}`, {
      method: 'put',
      body: data
    })
    .then (res => res.text())
    .then (text => {
      console.log(text);
      getTodos();
    })
    .catch (error => console.log(error))
}