// Знаходимо основний список категорій
const categoriesList = document.querySelector('#categories');

// Знаходимо всі елементи лістів з класом item
const categoryItems = categoriesList.querySelectorAll('.item');

// Виводимо загальну кількість категорій
console.log(`Number of categories: ${categoryItems.length}`);

// Перебираємо кожну категорію через forEach
categoryItems.forEach(item => {
  // Отримуємо текст заголовка h2
  const categoryTitle = item.querySelector('h2').textContent;
  
  // Рахуємо кількість вкладених li
  const elementsCount = item.querySelectorAll('ul li').length;
  
  // Виводимо інформацію в консоль
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${elementsCount}`);
});
