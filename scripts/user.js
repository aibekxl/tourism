function signup(e) {
    event.preventDefault();

    let email = document.getElementById('email').value;
    let username = document.getElementById('username').value;
    let pass = document.getElementById('password').value;

    let user = {
        email: email,
        username: username,
        password: pass,
    };

    let json = JSON.stringify(user);
    localStorage.setItem(username, json);
    console.log('user added');
    window.open(
        "login.html");
}

document.getElementById('username').innerHTML += localStorage.getItem('username');;
document.getElementById('email').innerHTML += localStorage.getItem('email');;
document.getElementById('password').innerHTML += localStorage.getItem('password');;

function login(e) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let pass = document.getElementById('password').value;
    let message = document.getElementById('message');

    let user = localStorage.getItem(username);
    let data = JSON.parse(user);
    console.log(data);

    if (user == null) {
        message.innerHTML = 'wrong username';
    } else if (username == data.username && pass == data.password) {
        message.innerHTML = 'logged in';
        if (!!window.localStorage) {
            localStorage.setItem('username', data.username);
            localStorage.setItem('email', data.email);
            localStorage.setItem('password', data.password);
        }
        window.open(
            "profile.html", "_blank");

    } else {
        message.innerHTML = 'wrong password';
    }
}