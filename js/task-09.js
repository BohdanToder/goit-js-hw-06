function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body');
const colorName = document.querySelector('.color');
const buttonRef = document.querySelector('.change-color');

function onButtonClick() {
  const bgColor = getRandomHexColor();
  bodyRef.style.backgroundColor = bgColor;
  colorName.textContent = bgColor;
}

buttonRef.addEventListener("click", onButtonClick);
