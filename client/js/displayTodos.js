function displayTodos() {
  fetch('http://localhost:8080/api/todos', {headers: {'content-type': 'aplication/json'}})
  .then(response => {
    if(response.ok){
      return response.json();
    } else throw new Error('Failed getting all employees. ');
  })
  .then(data => {
    let listItems = data.map( item => {
      return `<li class='todo-item'>${item.text}</li>`
    })
  })
}
