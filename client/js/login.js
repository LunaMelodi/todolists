import API_URL from './config/var';

const form = document.querySelector('#login-form');

function handleLogin(evt) {
  evt.preventDefault();

  const email = form.querySelector('#login-email').value;
  const password = form.querySelector('#login-password').value;

  const user = {
    email,
    password,
  };

  console.log('user before login(user) called :>> ', user);
  login(user)
    .then((res) => res.json())
    .then((data) => console.log('data :>> ', data))
    .catch((err) => {
      console.log('error :>> ', err);
    });
}

function login(user) {
  return fetch(`${TODOLISTS_API.API_URL}/auth/login`, {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(user),
  });
}

form.addEventListener('submit', handleLogin);
