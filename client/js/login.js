export default function login() {
    var logInInputs = document.querySelector('#log-in-input');
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    var data = new URLSearchParams();
    data.append('username', username.value);
    data.append('password', password.value);

    fetch('login', {
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
        console.log('user authenticated. ');
        return true;
    })
    .catch(error => {
        console.log(error);
        
    })
    username.value = '';
    password.value = '';
}