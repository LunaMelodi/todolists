export default function displayTodos() {
  fetch('http://localhost:8080/api/todos', {headers: {'content-type': 'aplication/json'}})
  .then(response => {
    if(response.ok){
      return response.json();
    } else throw new Error('Failed getting todo items. ');
  })
  .then(data => {
    let listItems = data.map( item => {
      return `<li class='todo-item'>${item.text}</li>`
    })
  })
}
    return listItems;
  }).catch( error => { console.log(error) })
}

