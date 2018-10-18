/*
 * 1. Selecting odd numbers - Given a list of numbers, select the ones that are odd
 */
const selectOdds = require('./library').selectOddNumbers;
const assert = require('assert');

//checking with one odd:
assert.deepEqual(selectOdds([1]), [1]);

//checking with odd and even:
assert.deepEqual(selectOdds([1,2]), [1]);

//checking with list of odds:
assert.deepEqual(selectOdds([1,3,4,5,6,7,8]), [1,3,5,7]);

//edge case - with 0:
assert.deepEqual(selectOdds([1,2,0]), [1]);

//edge case - with negative nos:
assert.deepEqual(selectOdds([1,-3,4]), [1,-3]); 

/*
 * 2. Selecting even numbers - Given a list of numbers, select the ones that are even
 */

const selectEvens = require('./library').selectEvenNumbers;

//checking with one even:
assert.deepEqual(selectEvens([6]), [6]);

//checking with one  even and one even:
assert.deepEqual(selectEvens([1,2]), [2]);

//checking with a list:
assert.deepEqual(selectEvens([1,3,4,5,6,7,8]), [4,6,8]);

//edge case - with 0:
assert.deepEqual(selectEvens([1,2,0]), [2,0]);

//edge case - with negative nos:
assert.deepEqual(selectEvens([1,-3,-4,8]), [-4,8]);

/*
 * 3. Sum of a list of numbers - Given a list of numbers, find the sum of all these numbers
 */

const sumOfaListOfNumbers = require('./library').sumOfaListOfNumbers;

assert.deepEqual(sumOfaListOfNumbers([2]),2);//single_element
assert.deepEqual(sumOfaListOfNumbers([2,4,6,3,5,7,0]),27);//list

/*
 * 4. Printing reverse - Given a list of numbers, PRINT the list in reverse order
 */
const printReverse = require('./library').printReverse;

assert.deepEqual(printReverse([1]),[1]); //single digit
assert.deepEqual(printReverse([1,2,3]),[3,2,1]); //simple list
assert.deepEqual(printReverse([9,-4,-5,1,2,-6]),[-6,2,1,-5,-4,9]); //negative numbers

/*
 *5. Selecting every second element - Given a list of numbers, select every second one:
 */

const selectEverySecondElement = require('./library').selectEverySecondElement;

assert.deepEqual(selectEverySecondElement([2,3,4,5,6]),[2,4,6]); //list starting with even & odd no of elements
assert.deepEqual(selectEverySecondElement([1,2,3,4,5,6]),[1,3,5]); //list starting with odd & even no of elements
assert.deepEqual(selectEverySecondElement([1,2,-3,-4,5,0,6,7,0]),[1,-3,5,6,0]); //negative numbers and zero

/*
 *6. Reverse Fibonacci - Generate a fibonacci sequence of length n in reverse order
 */

const fiboReverse = require('./library').fiboReverse;

assert.deepEqual(fiboReverse(1),[0]); //for single digit
assert.deepEqual(fiboReverse(2),[1,0]); //for length two 
assert.deepEqual(fiboReverse(8),[13, 8, 5, 3, 2, 1, 1, 0]); //for series 

/*
 * 7. Greatest number in a list - Given a list of numbers, find the greatest number in that sequence
 */

const {findGreatestNumber} = require('./library');

assert.deepEqual(findGreatestNumber([4]),4); //for single digit
assert.deepEqual(findGreatestNumber([1,3,4,15,5,6,7]),15); //for list  
assert.deepEqual(findGreatestNumber([1,3,-5,0,-10,10,0,6]),10); // for negative nos and zero

/*
 * 8. Lowest number in a list - Given a list of numbers, find the lowest number in that sequence
 */

const {findLowestNumber} = require('./library'); 

assert.deepEqual(findLowestNumber([1]),1);//for single digit
assert.deepEqual(findLowestNumber([1,4,5,6,7]),1);// for list
assert.deepEqual(findLowestNumber([1,3,4,0,-5,7,-10,5]),-10);// for -ve nos and zero



console.log("---------- Everything is fine -------------")

