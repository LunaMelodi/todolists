import TODOLISTS_API from './config/var';

function logout() {
  fetch(`${TODOLISTS_API.API_URL}/auth/logout`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  })
    .then((res) => res.json())
    .then((data) => console.log('data :>> ', data))
    .catch((err) => console.log('err :>> ', err));
}

const button = document.querySelector('#logout-button');

button.addEventListener('click', logout);
