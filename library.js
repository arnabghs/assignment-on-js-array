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
