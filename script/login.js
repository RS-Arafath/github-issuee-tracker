document.getElementById('btn-login').addEventListener('click', function () {
  // 1)get the mobile number
  const loginUserName = document.getElementById('login-username');
  const name = loginUserName.value;

  //2)get the pin
  const loginPin = document.getElementById('login-pin');
  const PIN = loginPin.value;

  //3 match number and pin
  if (name == 'admin' && PIN == 'admin123') {
    alert('Login Successfull');
    //destination after login

    window.location.assign('home.html');
  } else {
    alert('login faild');
    loginUserName.value = '';
    PIN = '';
    return;
  }
});
console.log('conn');
