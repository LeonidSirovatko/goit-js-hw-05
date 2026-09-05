function formatMessage(message, maxLength) {
  // 1. Проверяем, укладывается ли длина сообщения в лимит
  if (message.length <= maxLength) {
    return message;
  } else {
    // 2. Если превышает, обрезаем до maxLength символов и добавляем "..."
    return message.slice(0, maxLength) + "...";
  }
}

// Код для проверки работы функции
console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"
