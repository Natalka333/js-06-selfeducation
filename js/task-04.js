
const decrementBtnElem = document.querySelector('[data-action="decrement"]');
const incrementBtnElem = document.querySelector('[data-action="increment"]');
const spanElem = document.querySelector('#value');


decrementBtnElem.addEventListener('click', handleDecrement);
incrementBtnElem.addEventListener('click', handleIncrement);

let counterValue = 0;

function handleIncrement() {
    counterValue += Number(incrementBtnElem.textContent);
    spanElem.textContent = counterValue;
};

function handleDecrement() {
    counterValue += Number(decrementBtnElem.textContent);
    spanElem.textContent = counterValue;
};










