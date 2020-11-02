export default function loginSingupBtns() {
    let authBtnsContainer = document.createElement('header');
    authBtnsContainer.setAttribute('class', 'auth-buttons');

    let login = document.createElement('button');
    login.setAttribute('id', 'login-button');
    login.className = 'auth-button';
    login.innerHTML = 'log in';

    let signup = document.createElement('button');
    signup.setAttribute('id', 'signup-button');
    signup.className = 'auth-button';
    signup.innerHTML = 'sign up';
    
    authBtnsContainer.prepend(login);
    authBtnsContainer.append(signup);
    
    let app =  document.querySelector('.app');
    app.prepend(authBtnsContainer);
}