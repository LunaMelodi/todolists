import requestAuth from '/client/js/requests/requestAuth.js';

const signupForm = document.querySelector('#signup-form');
const signupName = signupForm.querySelector('#name');
const signupEmail = signupForm.querySelector('#email');
const signupPassword = signupForm.querySelector('#password');
const signupPassword2 = signupForm.querySelector('#password2');

const span = document.createElement('span');
span.innerHTML = 'password does not match.';
span.style.color = '#f00';
span.id = 'password-unmatch';
span.style.display = 'none';
signupPassword2.after(span);

const passwordTooShort = document.createElement('span');
passwordTooShort.innerHTML = 'password is too short.';
passwordTooShort.style.color = '#f00';
passwordTooShort.id = 'password-short';
passwordTooShort.style.display = 'none';
signupPassword.after(passwordTooShort);

signupPassword.addEventListener('change', e => {
  if(signupPassword.value.length < 6) {
    passwordTooShort.style.display = 'block';
  } else {
    passwordTooShort.style.display = 'none';
  }
})

signupForm.addEventListener('change', (e) => {
  if (signupPassword.value === signupPassword2.value) {
    span.style.display = 'none';
  } else {
    span.style.display = 'block';
  }
});

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (signupPassword.value === signupPassword2.value) {
    requestAuth.signup(signupName.value, signupEmail.value, signupPassword.value);
  }
});
