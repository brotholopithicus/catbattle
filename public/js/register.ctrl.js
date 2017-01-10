const regButton = document.querySelector('#registerButton');
const inputs = document.querySelectorAll('input');
const password = document.querySelector('input[name=password]');
const confirmPassword = document.querySelector('input[name=confirmPassword]');
const username = document.querySelector('input[name=username]');

function enableSubmitButton() {
    regButton.disabled = false;
    regButton.style.cursor = 'pointer';
    regButton.style.color = 'green';
}

function disableSubmitButton() {
    regButton.disabled = true;
    regButton.style.cursor = 'not-allowed';
    regButton.style.color = 'red';
}

function validate() {
    if (password.value === confirmPassword.value && username.value.length >= 3) {
        enableSubmitButton();
    } else {
        disableSubmitButton();
    }
}

inputs.forEach(item => item.addEventListener('keyup', validate));
