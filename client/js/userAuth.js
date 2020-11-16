import requestAuth from '/client/js/requests/requestAuth.js';

const loginForm = document.querySelector('#login-form');
let loginEmail = loginForm.querySelector('#email');
let loginPassword = loginForm.querySelector('#password');

loginForm.addEventListener('submit', e => {
    e.preventDefault();
    requestAuth.login(loginEmail.value, loginPassword.value)
})

const signupForm = document.querySelector('#signup-form');
let signupName = signupForm.querySelector('#name');
let signupEmail = signupForm.querySelector('#email');
let signupPassword = signupForm.querySelector('#password');
let signupPassword2 = signupForm.querySelector('#password2');


signupForm.addEventListener('submit', e => {
    e.preventDefault();
    requestAuth.signup(signupName.value, signupEmail.value, signupPassword.value)
})