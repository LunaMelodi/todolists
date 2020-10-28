<<<<<<< HEAD
import  API_URL  from './config/var.js';

var form = document.querySelector('#login-form');

function handleLogin(evt) {
  evt.preventDefault();

  var email = form.querySelector('#email').value
  var password = form.querySelector('#password').value;

  var user = {
    email: email,
    password: password
  };

  console.log('user before login(user) called :>> ', user);
  login(user)
  .then(res => res.json())
  .then(data => console.log('data :>> ', data))
  .catch(err => {
      console.log('error :>> ', err);
  })

}

function login(user) {
  return fetch(API_URL + '/auth/login', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(user),
  })
}

form.addEventListener('submit', handleLogin);
=======
export default function login() {
    var username = document.getElementById('input-username');
    var password = document.getElementById('input-password');
    var data = new URLSearchParams();
    data.append('username', username.value);
    data.append('password', password.value);

    fetch('http://localhost:8080/api/auth', {
        method: 'post',
        body: data,
        headers: {'content-type': 'aplication/json'}
    })
    .then(response => {
        if(response.ok) {
            return response.json();
        } else throw new Error('Failed authenticating user. ')
    })
    .then(res => {
        console.log('User authenticated. ');
        return true;
    })
    .catch(error => {
        console.log(error);
        
    })
    username.value = '';
    password.value = '';
}
>>>>>>> jsGenerated
