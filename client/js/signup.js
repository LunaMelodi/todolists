var form = document.querySelector('#signup-form');

function handleSignup(evt) {
  evt.preventDefault();

  var name = form.querySelector('#name').value;
  var email = form.querySelector('#email').value;
  var password = form.querySelector('#password').value;

  var user = {
    name: name,
    email: email,
    password: password
  };

  console.log('user :>> ', user);
  signup(user)
  .then(res => res.json())
  .then(data => console.log('data >> ', data))
  .catch(err => {
      console.log('error :>> ', err);
  })

}

function signup(user) {
  return fetch('http://localhost:8000/auth/signup', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    //credentials: 'include',
    body: JSON.stringify(user),
  })
}

form.addEventListener('submit', handleSignup);