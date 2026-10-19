const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  // Зупиняємо дефолтне перезавантаження сторінки
  event.preventDefault();
  
  const form = event.currentTarget;
  
  // Використовуємо FormData для збору значень
  const formData = new FormData(form);
  const formObject = {};
  let hasEmptyField = false;

  formData.forEach((value, key) => {
    const trimmedValue = value.trim();
    
    // Якщо хоча б одне поле після trim залишилося порожнім
    if (trimmedValue === '') {
      hasEmptyField = true;
    }
    
    formObject[key] = trimmedValue;
  });

  // Валідація: якщо є незаповнені поля, перериваємо виконання
  if (hasEmptyField) {
    alert('All form fields must be filled in');
    return;
  }

  // Виводимо об'єкт із даними в консоль
  console.log(formObject);
  
  // Очищаємо поля форми
  form.reset();
});
