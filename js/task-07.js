const inputElement = document.querySelector('#font-size-control');
const spanElement = document.querySelector('#text');

inputElement.addEventListener('input', handleChange);

function handleChange() {
    spanElement.style.fontSize = inputElement.value + 'px';

}