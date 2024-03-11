const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const allIngridients = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {
  const ingredients = document.createElement('li');
  ingredients.classList.add('item');
  ingredients.textContent = `${ingredient}`;
  return ingredients;
});

allIngridients.append(...elements);