/*
 * 1. Selecting odd numbers - Given a list of numbers, select the ones that are odd
 */
const selectOddNumbers = function (array){
  let listOfOdds = [];
  for (value of array){
    if (value%2 != 0){
      listOfOdds.push(value)
    }
  }
  return listOfOdds;
}
exports.selectOddNumbers = selectOddNumbers;

/*
 * 2. Selecting even numbers - Given a list of numbers, select the ones that are even
 */

const selectEvenNumbers = function (array){
  let listOfEvens = [];
  for (value of array){
    if (value%2==0){
      listOfEvens.push(value)
    }
  }
  return listOfEvens;
}
exports.selectEvenNumbers = selectEvenNumbers;

/*
 * 3. Sum of a list of numbers - Given a list of numbers, find the sum of all these numbers
 */

const sumOfaListOfNumbers = function(array){
  let sum = 0;
  for (value of array){
    sum = sum + value;
  }
  return sum;
}
exports.sumOfaListOfNumbers = sumOfaListOfNumbers;

/*
 * 4. Printing reverse - Given a list of numbers, PRINT the list in reverse order
 */

const printReverse = function (array){
  let outputArray = [];
  for (index = 0; index < array.length; index++){
    outputArray[index] = array[(array.length-1)-index];
  }
  return outputArray;
}
exports.printReverse = printReverse;

/*
 *5. Selecting every second element - Given a list of numbers, select every second one:
 */

const selectEverySecondElement = function(array){
  let outputArray = [];
  let outputIndex = 0;
  for (index = 0; index < array.length; index++){
    if (index%2 == 0){
      outputArray[outputIndex] = array[index];
      outputIndex ++ ;
    }
  }
  return outputArray;
}
exports.selectEverySecondElement = selectEverySecondElement;

/*
 *6. Reverse Fibonacci - Generate a fibonacci sequence of length n in reverse order
 */

const fiboReverse = function(length){
  let firstElement = 0;
  let secondElement = 1;
  let element = 0;
  let outputArray = [];
  for(let index=0 ; index < length ; index++) {
    outputArray[index] = firstElement;
    element = (firstElement+secondElement);
    firstElement = secondElement;
    secondElement = element;
  }
  outputArray = outputArray.reverse();
  return outputArray;
}
exports.fiboReverse = fiboReverse;

/*
 * 7. Greatest number in a list - Given a list of numbers, find the greatest number in that sequence
 */

const findGreatestNumber = function(inputArray){
  let highestNumber = inputArray[0];
  for (value of inputArray){
    if (value > highestNumber){
      highestNumber = value;
    }
  }
  return highestNumber;
}
exports.findGreatestNumber = findGreatestNumber;

/*
 * 8. Lowest number in a list - Given a list of numbers, find the lowest number in that sequence
 */

const findLowestNumber = function(inputArray){
  let lowestNumber = inputArray[0];
  for (value of inputArray){
    if (value < lowestNumber){
      lowestNumber = value;
    }
  }
  return lowestNumber;
}
exports.findLowestNumber = findLowestNumber;

/*
 * 9. Average of a list - Given a list of numbers, find the average of that list
 */

const findAverage = function(inputArray){
  let sum = sumOfaListOfNumbers(inputArray);
  let average = sum/(inputArray.length);
  return average;
}
exports.findAverage = findAverage;

/*
 * 10. Mapping lengths - Given a list of names, generate another array that contains the length of each of the names:
 */

const countLength = function(inputArray){
  let outputArray = [];
  for (value of inputArray){
    outputArray.push(value.length);
  }
  return outputArray;
}
exports.countLength = countLength;

/*
 * 11. Counting odd numbers - Write a function to count how many odd numbers are present in an array
 */

 const countOddNumbers  =function(inputArray){
   let outputArray = selectOddNumbers(inputArray);
   return (outputArray.length);
 }
exports.countOddNumbers = countOddNumbers;

/*
 * 11. Counting even numbers - Write a function to count how many even numbers are present in an array
 */

 const countEvenNumbers  =function(inputArray){
   let outputArray = selectEvenNumbers(inputArray);
   return (outputArray.length);
 }
exports.countEvenNumbers = countEvenNumbers;

/*
 * 13. Count how many numbers above a certain threshold in an array
 */

const countNosAbovelimit = function(inputArray,threshold){
  let count = 0;
  for (value of inputArray){
    if (value > threshold){
      count += 1;
    }
  }
  return count;
}
exports.countNosAbovelimit = countNosAbovelimit;

/*
 * 14. Count how many numbers below a certain threshold in an array
 */

const countNosBelowlimit = function(inputArray,threshold){
  let count = 0;
  for (value of inputArray){
    if (value < threshold){
      count += 1;
    }
  }
  return count;
}
exports.countNosBelowlimit = countNosBelowlimit;


/*
 * 15. Reversing an Array - Given an array, write a function that provides a reversed version of the same array *without* changing the contents of the original array.
 */

const reverseArray = function(inputArray){
  let outputArray = inputArray.reverse();
  return outputArray;
}
exports.reverseArray = reverseArray;  


/*
 * 16. Index Of a Number - Given an array of numbers find the first position of a specified number
 */
 

const findIndex = function(inputArray,number){
  let indexOfNumber;
  for (index = (inputArray.length-1); index >= 0; index--){
    if (inputArray[index] == number){
      indexOfNumber = index;
    }
  }
  return indexOfNumber;
}
exports.findIndex = findIndex;
