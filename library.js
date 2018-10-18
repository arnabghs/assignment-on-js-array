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
  if (length == 1){
    outputArray = [firstElement]
  }else {
    outputArray = [firstElement,secondElement];
  }
  //from 3rd no.
  for(let index=2 ; index < length ; index++) {
    element = (firstElement+secondElement);
    firstElement = secondElement;
    secondElement = element;
    outputArray[index] = element;
  }
  outputArray = outputArray.reverse();
  return outputArray;
}
exports.fiboReverse = fiboReverse;
