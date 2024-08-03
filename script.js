const pass = document.querySelector('#pass');
const cpass = document.querySelector('#cpass');
const password_error = document.querySelector('#password-error');

cpass.addEventListener("input", function(e)
{
    if (pass.value !== cpass.value)
    {
        password_error.textContent = '(*)Password does not match';
    }
    else
    {
        password_error.textContent = '';
    }
});