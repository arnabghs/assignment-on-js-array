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


console.log("---------- Everything is fine -------------")
