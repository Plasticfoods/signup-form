const submitButton = document.querySelector('.btn-submit');
const inputs = document.querySelectorAll('.input');
const warnings = document.querySelectorAll('.warning');
const emailInput = document.querySelector('#email');

submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    let inputError = checkInput();
    if(inputError) {
        showWarning();
    }
    else {
        document.querySelector('body').innerHTML = `<h1>Logged In</h1>`;
    }
})

function checkInput() {
    for(let input of inputs) {
        if(input.value === '') return true;
    }
    return false;
}

function showWarning() {
    warnings.forEach((warning) => {
        warning.style.display = 'block';
    })

    inputs.forEach(input => {
        input.placeholder = '';
        input.style.borderColor = 'hsl(0, 100%, 74%)';
        input.style.background = "url('./images/icon-error.svg') no-repeat 95%";
    });

    emailInput.value = 'email@example/com';
    emailInput.style.color = 'hsl(0, 100%, 74%)';
    emailInput.style.fontWeight = '500';
}

emailInput.addEventListener('keydown', () => {
    emailInput.style.color = 'hsl(249, 10%, 26%)';
});