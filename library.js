/*
 * 1. Selecting odd numbers - Given a list of numbers, select the ones that are odd
 */

const isOdd = function(element){
  return element%2 != 0;
}

const selectOddNumbers = function (array){
  return outputList = array.filter(isOdd);
}
exports.selectOddNumbers = selectOddNumbers;

/*
 * 2. Selecting even numbers - Given a list of numbers, select the ones that are even
 */
const isEven = function(element){
  return element%2 == 0;
}

const selectEvenNumbers = function (array){
  return outputList = array.filter(isEven);
}
exports.selectEvenNumbers = selectEvenNumbers;

/*
 * 3. Sum of a list of numbers - Given a list of numbers, find the sum of all these numbers
 */
const sum  = function(previousValue,curentValue) {
  return previousValue+curentValue;
}
const sumOfaListOfNumbers = function(array){
  return array.reduce(sum,0);
}
exports.sumOfaListOfNumbers = sumOfaListOfNumbers;

/*
 * 4. Printing reverse - Given a list of numbers, PRINT the list in reverse order
 */
const printReverse = function (array){
  let outputArray = [];
  const putAtBeginning = function(element) {
    outputArray.unshift(element);
  }
  array.map(putAtBeginning);
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
const selectAlternateElement = function(array){
  return outputArray = array.reduce( everySecondElementFilter,
    {index:0, elements:[]}).elements;
}
exports.selectAlternateElement = selectAlternateElement;

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
  return printReverse(outputArray);
}
exports.fiboReverse = fiboReverse;

/*
 * 7. Greatest number in a list - Given a list of numbers, find the greatest number in that sequence
 */
const getHighestValue  = function(previousValue,currentValue) {
  previousValue = Math.max(previousValue,currentValue);
  return previousValue;
}
const findGreatestNumber = function(inputArray){
  return inputArray.reduce(getHighestValue);
}
exports.findGreatestNumber = findGreatestNumber;

/*
 * 8. Lowest number in a list - Given a list of numbers, find the lowest number in that sequence
 */
const getLowestValue =  function(previousValue,currentValue) {
  previousValue = Math.min(previousValue,currentValue);
  return previousValue;
}
const findLowestNumber = function(inputArray){
  return inputArray.reduce(getLowestValue);
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
const calculateLength = function(element){
  return element.length;
}
const countLength = function(inputArray){
  return inputArray.map(calculateLength);
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
  const chooseAboveLimit = function(element){
    return element > threshold;
  }
  return inputArray.filter(chooseAboveLimit).length;
}
exports.countNosAbovelimit = countNosAbovelimit;

/*
 * 14. Count how many numbers below a certain threshold in an array
 */

const countNosBelowlimit = function(inputArray,threshold){
  const chooseBelowLimit = function(element){
    return element < threshold;
  }
  return inputArray.filter(chooseBelowLimit).length;
}
exports.countNosBelowlimit = countNosBelowlimit;


/*
 * 15. Reversing an Array - Given an array, write a function that provides a reversed version of the same array *without* changing the contents of the original array.
 */

const reverseArray = function(inputArray){
  let outputArray = [];
  const putAtBeginning = function(element) {
    outputArray.unshift(element);
  }
  inputArray.map(putAtBeginning);
  return outputArray;
}
exports.reverseArray = reverseArray;  

/*
 * 16. Index Of a Number - Given an array of numbers find the first position of a specified number
 */

const findIndex = function(inputArray,number){
  const matchWithANumber = function (element){
    return element == number;
  }
  return indexOfNumber = inputArray.findIndex(matchWithANumber);
}
exports.findIndex = findIndex;


/*
 * 17. Ascending order - Given an array of numbers, check if the array is in ascending order
 */

const checkOrderForAscending = function(state,currvalue){
  let {prevValue, statement}  = state;
  if (prevValue <= currvalue){
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
  if (prevValue >= currvalue){
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
  const isPresent = function(element){
    if (!outputArray.includes(element)){
      outputArray.push(element);
    }
  }
  inputArray.map(isPresent);
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
  const isPresent = function (element){
    return secondArray.includes(element);
  }
  let outputArray =  firstArray.filter(isPresent);
  return removeDuplicates(outputArray);
}
exports.makeIntersection = makeIntersection;

/*
 *  23. Difference - Given two arrays, generate a new array that consists of unique elements that are present in the first array, but not in the second.
 */
const findDifference = function (firstArray,secondArray){
  const isPresent = function (element){
    return (!secondArray.includes(element));
  }
  let outputArray = firstArray.filter(isPresent);
  return removeDuplicates(outputArray);
}
exports.findDifference = findDifference;

/*
 *  24. isSubset - Given two arrays, check if the second is a proper subset of the first.
 */

const isSubset = function(firstArray,secondArray){
  let outputArray = makeIntersection(firstArray,secondArray);
  let statement = false;
  const isPresent = function(element){
    return outputArray.includes(element);
  }
  if ( outputArray.length < firstArray.length){
    statement = secondArray.every(isPresent);
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
  let firstPart = inputArray.slice(turn);
  return firstPart.concat(inputArray.slice(0,turn));
}
exports.rotate = rotate;

/*
 *  27. Partition - Given an array of numbers, it returns a partitioned array consisting of numbers above a certain number and below a certain number
 */

const partitionArray = function (inputArray,limit){
  const partitioner = function(state,element){
    let {firstPart , secondPart } = state;
    if ( element > limit){
      secondPart.push(element);
      return {firstPart , secondPart };
    }
    firstPart.push(element);
    return {firstPart , secondPart };
  }

  let  objectOfArrays = inputArray.reduce(partitioner,
    {firstPart : [], secondPart : []})
  return [objectOfArrays.firstPart , objectOfArrays.secondPart]
}
exports.partitionArray = partitionArray;

