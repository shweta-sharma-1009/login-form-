function validate(){
    let username = document.getElementById('username1').
    value;
    let password = document.getElementById('passward').
    value;

    if (username === 'webdev' && password === 'geekster')
    {
        alert('Login successfuly!');
    }else{
        alert('Login failed')
    }
}
