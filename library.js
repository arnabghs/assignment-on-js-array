/*
 * 1. Selecting odd numbers - Given a list of numbers, select the ones that are odd
 */
const selectOddNumbers = function (array){
  return outputList = array.filter(function(element) {return element%2 != 0});
}
exports.selectOddNumbers = selectOddNumbers;

/*
 * 2. Selecting even numbers - Given a list of numbers, select the ones that are even
 */

const selectEvenNumbers = function (array){
  return outputList = array.filter(function(element) {return element%2 == 0});
}
exports.selectEvenNumbers = selectEvenNumbers;

/*
 * 3. Sum of a list of numbers - Given a list of numbers, find the sum of all these numbers
 */

const sumOfaListOfNumbers = function(array){
  return sum = array.reduce(function(pv,cv) {return pv+cv})
}
exports.sumOfaListOfNumbers = sumOfaListOfNumbers;

/*
 * 4. Printing reverse - Given a list of numbers, PRINT the list in reverse order
 */

const printReverse = function (array){
  let outputArray = [];
  array.map( function(element) {outputArray.unshift(element)});
  return outputArray;
}
exports.printReverse = printReverse;

/*
 5. Selecting every second element - Given a list of numbers, select every second one:
 */

const everySecondElementFilter = function(state,element){
  let {index , elements} = state;
  if (index%2 == 0){
    elements = elements.concat(element);
  }
  return {index : index+1 , elements : elements}
} 
const selectEverySecondElement = function(array){
  return outputArray = array.reduce( everySecondElementFilter,
    {index:0, elements:[]}).elements;
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
  return highestNumber = inputArray.reduce( function(previousValue,currentValue) {
    previousValue = Math.max(previousValue,currentValue);
    return previousValue;
  })
}
exports.findGreatestNumber = findGreatestNumber;

/*
 * 8. Lowest number in a list - Given a list of numbers, find the lowest number in that sequence
 */

const findLowestNumber = function(inputArray){
  return lowestNumber = inputArray.reduce( function(previousValue,currentValue) {
    previousValue = Math.min(previousValue,currentValue);
    return previousValue;
  })
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
  return outputArray = inputArray.map( function(element){
    return element.length;
  })
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
 * 12. Counting even numbers - Write a function to count how many even numbers are present in an array
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
  return count = inputArray.filter( function(element){
    return element > threshold
  }).length;
}
exports.countNosAbovelimit = countNosAbovelimit;

/*
 * 14. Count how many numbers below a certain threshold in an array
 */

const countNosBelowlimit = function(inputArray,threshold){
   return count = inputArray.filter( function(element){
     return element < threshold
   }).length;
}
exports.countNosBelowlimit = countNosBelowlimit;


/*
 * 15. Reversing an Array - Given an array, write a function that provides a reversed version of the same array *without* changing the contents of the original array.
 */

const reverseArray = function(inputArray){
  let outputArray = [];
  inputArray.map( function(element) {outputArray.unshift(element)});
  return outputArray;
}
exports.reverseArray = reverseArray;  

/*
 * 16. Index Of a Number - Given an array of numbers find the first position of a specified number
 */

const findIndex = function(inputArray,number){
  return indexOfNumber = inputArray.findIndex(function (element){
    return element == number
  });
}
exports.findIndex = findIndex;


/*
 * 17. Ascending order - Given an array of numbers, check if the array is in ascending order
 */

const checkOrderForAscending = function(state,currvalue){
  let {prevValue, statement}  = state;
  if (prevValue < currvalue){
    statement.push(true);
  } else {
    statement.push(false);
  }
  return { prevValue : currvalue , statement : statement}
}

const checkAscendingOrder = function(inputArray){
  return statementArray = inputArray.reduce(checkOrderForAscending,
    {prevValue : inputArray[0]-1 , statement : [] }). statement.
    every( function (x){return x == true})
}
  exports.checkAscendingOrder = checkAscendingOrder;


/*
 * 18. Descending order - Given an array of numbers, check if the array is in descending order
 */
const checkOrderForDescending = function(state,currvalue){
  let {prevValue, statement}  = state;
  if (prevValue > currvalue){
    statement.push(true);
  } else {
    statement.push(false);
  }
  return { prevValue : currvalue , statement : statement}
}

const checkDescendingOrder = function(inputArray){
  return statementArray = inputArray.reduce(checkOrderForDescending,
    {prevValue : inputArray[0]+1 , statement : [] }). statement.
    every( function (element){return element == true})
}

exports.checkDescendingOrder = checkDescendingOrder;

/*
 * 19. Extract digits - Given a number, extract the digits of a number into an array:
 */

const extractDigits = function(number){
  let stringOfNumber = ''+number;
  let outputArray = [];
  for (index = 0; index < stringOfNumber.length ; index++){
    outputArray.push(+stringOfNumber[index]);
  }
  return outputArray;
}
exports.extractDigits = extractDigits;

/*
 * 20. Unique - Given an array, remove duplicate elements and return an array of only unique elements.
 */

const removeDuplicates = function(inputArray){
  let outputArray = [];
  inputArray.forEach( function(element){
    if (!outputArray.includes(element)){
      outputArray.push(element);
    }
  })
  return outputArray;
}
exports.removeDuplicates = removeDuplicates;


/*
 *  21. Union - Given two arrays, generate a new array consisting of unique elements across both those arrays.
 */

const makeUnion = function(firstArray,secondArray){
  let outputArray = firstArray.concat(secondArray);
  outputArray = removeDuplicates(outputArray);
  return outputArray;
}
exports.makeUnion = makeUnion;

/*
 *  22. Intersection - Given two arrays, generate a new array consisting of unique elements that are contained in both arrays.
 */

const makeIntersection = function(firstArray,secondArray){
  let outputArray =  firstArray.filter(function (element){
    return secondArray.includes(element);
  })
  return outputArray = removeDuplicates(outputArray);
}
exports.makeIntersection = makeIntersection;

/*
 *  23. Difference - Given two arrays, generate a new array that consists of unique elements that are present in the first array, but not in the second.
 */
const findDifference = function (firstArray,secondArray){
   let outputArray = firstArray.filter(function (elements){
     return (!secondArray.includes(elements));
   })
  return outputArray = removeDuplicates(outputArray);
}
exports.findDifference = findDifference;

/*
 *  24. isSubset - Given two arrays, check if the second is a proper subset of the first.
 */

const isSubset = function(firstArray,secondArray){
  let outputArray = makeIntersection(firstArray,secondArray);
  let statement = false;
  if ( outputArray.length < firstArray.length){
    statement = secondArray.every(function(element){
      return outputArray.includes(element);
    })
  }
  return statement;
}
exports.isSubset = isSubset;

/*
 *  25. Zip - insert elements from two arrays as follows:
 */

const zip = function(firstArray,secondArray){
    const pushForZip = function(state,element){
    let {index, finalArray} = state;
    finalArray[index] = [firstArray[index],element];
    index = index +1;
    finalArray = finalArray;
    return {index , finalArray};
  }

  return outputArray = secondArray.reduce(pushForZip,
    {index : 0 , finalArray : []}).finalArray;
}
exports.zip = zip;


/*
 *  26. Rotate - creates a new array by rotating elements from the given array.
 */

const rotate = function(inputArray,turn){
  let outputArray = [];
  for (index = turn; index < inputArray.length; index++){
    outputArray.push(inputArray[index]);
  }
  for (index = 0; index < turn; index++){
    outputArray.push(inputArray[index]);
  }
  return outputArray;
}
exports.rotate = rotate;

/*
 *  27. Partition - Given an array of numbers, it returns a partitioned array consisting of numbers above a certain number and below a certain number
 */

const partitionArray = function (inputArray,limit){
  let numbersBelowLimit = [];
  let numbersAboveLimit = [];

  for (value of inputArray){
    if (value > limit){
      numbersAboveLimit.push(value);
    } else {
      numbersBelowLimit.push(value);
    }
  }
  let outputArray = [numbersBelowLimit,numbersAboveLimit];
  return outputArray;
}
exports.partitionArray = partitionArray;

