const submitButton = document.querySelector('.btn-submit');
const inputs = document.querySelectorAll('.input');
const warnings = document.querySelectorAll('.warning');

submitButton.addEventListener('click', () => {
    let inputError = checkInput();
    console.log(inputError);
    if(inputError) {
        showWarning();
    }
})

function checkInput() {
    for(let input of inputs) {
        if(input.value === '' || input.value === input.name) return true;
    }
    return false;
}

function showWarning() {
    warnings.forEach((warning) => {
        warning.style.display = 'block';
    })
}