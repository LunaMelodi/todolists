export default function getTodos() {
  var todos = [] 
  fetch('http://localhost:8080/api/todos', {headers: {'content-type': 'aplication/json'}})
  .then(response => {
    if(response.ok){
      return response.json();
    } else throw new Error('Failed getting todo items. ');
  })
  .then(data => {
    console.log('data.data :>> ', data.data);
    todos = data.data;
    return data.data;
  }).catch( error => { console.log(error) })

  return todos;
}