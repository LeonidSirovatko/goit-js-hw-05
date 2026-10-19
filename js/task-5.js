function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const changeColorButton = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

changeColorButton.addEventListener('click', () => {
  // Викликаємо функцію генерації кольору один раз
  const newColor = getRandomHexColor();
  
  // Задаємо колір фону для body
  document.body.style.backgroundColor = newColor;
  
  // Записуємо значення кольору в текстовий контент span
  colorSpan.textContent = newColor;
});
