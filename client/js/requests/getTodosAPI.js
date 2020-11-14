<<<<<<< HEAD:client/js/requests/getTodosAPI.js
import TODOLISTS_API from '../config/var.js';
=======
import API_URL from './config/var';
>>>>>>> todosAPI:client/js/getTodosAPI.js

function getTodosAPI() {
  fetch(TODOLISTS_API.API_URL + TODOLISTS_API.TODOS_ENDPOINT, {
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  })
  .then(res => res.json())
  .then(data => console.log('returned TODO data :>> ', data))
  .catch(err => console.log('err :>> ', err))
}

let button = document.querySelector('#getTodos-button');

button.addEventListener('click', getTodosAPI);