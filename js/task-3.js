const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', (event) => {
  // Очищаємо значення інпуту від пробілів по краях
  const trimmedValue = event.currentTarget.value.trim();
  
  // Якщо інпут порожній або містить лише пробіли — повертаємо Anonymous
  nameOutput.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue;
});
