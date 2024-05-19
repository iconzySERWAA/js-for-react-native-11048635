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




  function processArray(numbers) {
    return numbers.map(num => {
      if (num % 2 === 0) {
        return num * num;
      } else {
        return num * 3;
      }
    });
  }
  
  function combineArrays(strings, numbers) {
    // Ensure the arrays are of the same length
    if (strings.length !== numbers.length) {
      throw new Error("The arrays must be of the same length");
    }
  
    return strings.map((str, index) => {
      return {
        string: str,
        number: numbers[index]
      };
    });
  }
  
  // Example usage:
  const stringsArray = ["one", "two", "three", "four", "five"];
  const numbersArray = [1, 2, 3, 4, 5];
  const processedNumbersArray = processArray(numbersArray);
  
  const combinedArray = combineArrays(stringsArray, processedNumbersArray);
  console.log(combinedArray);
    


  
  function processArray(numbers) {
    return numbers.map(num => {
      if (num % 2 === 0) {
        return num * num;
      } else {
        return num * 3;
      }
    });
  }
  
  function combineArrays(strings, numbers) {
    // Ensure the arrays are of the same length
    if (strings.length !== numbers.length) {
      throw new Error("The arrays must be of the same length");
    }
  
    return strings.map((str, index) => {
      if (numbers[index] % 2 === 0) {
        // Even number: capitalize the entire string
        return str.toUpperCase();
      } else {
        // Odd number: convert the string to lowercase
        return str.toLowerCase();
      }
    });
  }
  
  // Example usage:
  const stringsArray = ["one", "two", "three", "four", "five"];
  const numbersArray = [1, 2, 3, 4, 5];
  const processedNumbersArray = processArray(numbersArray);
  
  const combinedArray = combineArrays(stringsArray, processedNumbersArray);
  console.log(combinedArray);
  

