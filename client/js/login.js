var form = document.querySelector('#login-form');

function handleLogin(evt) {
  evt.preventDefault();

  var email = form.querySelector('#email').value
  var password = form.querySelector('#password').value;

  var user = {
    email: email,
    password: password
  };

  console.log('user :>> ', user);
  login(user)
  .then(res => res.json())
  .then(data => console.log('data >> ', data))
  .catch(err => {
      console.log('error :>> ', err);
  })

}

function login(user) {
  return fetch('http://localhost:8000/auth/login', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(user),
  })
}

form.addEventListener('submit', handleLogin);