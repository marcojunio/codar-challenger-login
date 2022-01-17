const inputEmail = document.getElementById('login');
const inputPassword = document.getElementById('password');

const invalidUser = document.getElementById('invalid-feedback-login');

inputEmail.addEventListener('blur',(e) => {
    if(validateEmail(e.target.value)){
        inputEmail.removeAttribute('aria-invalid');
        inputEmail.style.borderColor = '';
        invalidUser.innerHTML = '';
    }else{
        inputEmail.setAttribute('aria-invalid','true');
        inputEmail.style.borderColor = '#FF5757';
        invalidUser.innerHTML = 'Por favor, insira um e-mail válido.';
    }
})

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};