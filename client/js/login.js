import requestAuth from '/client/js/requests/requestAuth.js';

const loginForm = document.querySelector('#login-form');
let loginEmail = loginForm.querySelector('#email');
let loginPassword = loginForm.querySelector('#password');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    requestAuth.login(loginEmail.value, loginPassword.value)
})

