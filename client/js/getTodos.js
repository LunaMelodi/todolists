import displayTodos from "/client/js/displayTodos.js";

export default function getTodos() {
  fetch('http://localhost:8080/api/todos', {headers: {'content-type': 'aplication/json'}})
  .then(response => {
    if(response.ok){
      return response.json();
    } else throw new Error('Failed getting todo items. ');
  })
  .then(data => {
    console.log('data.data :>> ', data.data);
    displayTodos(data.data)
    
  }).catch( error => { console.log(error) })
}