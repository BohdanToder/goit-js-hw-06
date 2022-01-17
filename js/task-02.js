const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const mainList = document.querySelector('#ingredients');

const mainListElements = ingredients.map(ingredient => {

  const mainListElement = document.createElement('li');
  mainListElement.textContent = ingredient;
  mainListElement.classList.add('item');

  return mainListElement;
});

mainList.append(...mainListElements);