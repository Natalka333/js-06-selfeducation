function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const refs = {
  inputEl: document.querySelector('input'),
  buttonElCreate: document.querySelector('[data-create]'),
  buttonElDestroy: document.querySelector('[data-destroy]'),
  boxesEl: document.querySelector('#boxes'),
};

const inputOption = {
  min: Number(refs.inputEl.min),
  max: Number(refs.inputEl.max),
  step: Number(refs.inputEl.step),
}


refs.buttonElCreate.addEventListener('click', handleCreateElement);
refs.buttonElDestroy.addEventListener('click', destroyBoxes);


function handleCreateElement() {
  let amount = Number(refs.inputEl.value);
  if (amount < inputOption.min || amount > inputOption.max) {
    return;
  }
  const boxArray = [];
  const size = 30;
  for (let i = 0; i < amount; i += inputOption.step) {
    let growingSize = size + i * 10;
    const boxEl = `<div style='width:${growingSize > 70 ? 70 : growingSize}px; height:${growingSize}px; background-color:${getRandomHexColor()}'></div>`;
    boxArray.push(boxEl);

  }
  refs.boxesEl.insertAdjacentHTML('beforeend', boxArray.join(''));

};

function destroyBoxes() {
  refs.boxesEl.innerHTML = '';
  refs.inputEl.value = '';
}



































