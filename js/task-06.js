const textElement = document.querySelector('#validation-input');

const inputLength = Number(textElement.dataset.length);

textElement.addEventListener('blur', validationInput);

function validationInput(value) {
    const updateText = textElement.value.trim();
    console.log(updateText);
    if (updateText.length === inputLength) {
        textElement.classList.remove('invalid');
        textElement.classList.add('valid');
    } else {
        textElement.classList.remove('valid');
        textElement.classList.add('invalid');
    }

}