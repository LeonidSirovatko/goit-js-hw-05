function checkForSpam(message) {
  // 1. Приводим всю строку к нижнему регистру для регистронезависимой проверки
  const normalizedMessage = message.toLowerCase();

  // 2. Проверяем, содержит ли строка слова 'spam' или 'sale'
  return normalizedMessage.includes("spam") || normalizedMessage.includes("sale");
}

// Код для проверки работы функции
console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
