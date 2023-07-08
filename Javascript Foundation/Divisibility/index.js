function printNumbers(array) {
    for (let i = 0; i < array.length; i++) {
      const number = array[i];
      
      if (number % 2 === 0) {
        continue;
      }
      
      if (number % 3 === 0) {
        console.log(number);
      }
    }
  }
  
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  printNumbers(numbers);
  