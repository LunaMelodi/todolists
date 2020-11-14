import API_URL from './config/var';

function getTodosAPI() {
  fetch(TODOLISTS_API.API_URL + TODOLISTS_API.TODOS_ENDPOINT, {
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  })
    .then((res) => res.json())
    .then((data) => console.log('returned TODO data :>> ', data))
    .catch((err) => console.log('err :>> ', err));
}

const button = document.querySelector('#getTodos-button');

button.addEventListener('click', getTodosAPI);
