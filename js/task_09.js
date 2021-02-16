function changeEven(numbers, value) {
    // Пиши код ниже этой строки
    const newArray = [];
    numbers.forEach(number => number % 2 === 0 ? newArray.push(number + value) : newArray.push(number));
    
    return newArray;
    // Пиши код выше этой строки
  }