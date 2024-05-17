function processArray(numbers) {
    return numbers.map(num => {
      if (num % 2 === 0) {
        // Even number: square it
        return num * num;
      } else {
        // Odd number: triple it
        return num * 3;
      }
    });
  }
  
  // Example usage:
  const inputArray = [1, 2, 3, 4, 5];
  const resultArray = processArray(inputArray);
  console.log(resultArray); 
