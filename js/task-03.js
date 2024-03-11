const images = [
    {
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];


const gallery = document.querySelector('.gallery');
const markup = images.map(({ url, alt }) =>
    `<li class='list-item'><img class='picture' src=${url} alt=${alt}'></li>`
).join('');

gallery.insertAdjacentHTML('beforeend', markup);


// const targetBtn = document.querySelector('.target');
// const addBtn = document.querySelector('.add');
// const removeBtn = document.querySelector('.remove');


// addBtn.addEventListener('click', event => {
//     console.log(event);
//     console.log('вешаю слушателя')
//     targetBtn.addEventListener('click', onTargetBtnClick)

// })
// removeBtn.addEventListener('click', event => {
//     console.log('снимаю слушателя');
//     targetBtn.removeEventListener('click', onTargetBtnClick)
// })

// function onTargetBtnClick(event) {
//     console.log('делаю клик по кнопке');
// }


// const formElement = document.querySelector('.js-register-form');

// formElement.addEventListener('submit', handleFormSubmit);

// function handleFormSubmit(event) {
//     event.preventDefault();

//     console.dir(event.currentTarget);

//     const formData = new FormData(event.currentTarget);
//     console.log(formData);
//     formData.forEach((value, name) => {
//         console.log('name', name);
//         console.log('value', value);
//     })
// }
