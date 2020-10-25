function getTodosAPI() {
  fetch('http://localhost:8000/api/todos')
  .then(res => res.json())
  .then(data => console.log('returned TODO data :>> ', data))
  .catch(err => console.log('err :>> ', err))
}

button = document.querySelector('#getTodos-button');

button.addEventListener('click', getTodosAPI);