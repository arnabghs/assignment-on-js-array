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


/*
 * 9. Average of a list - Given a list of numbers, find the average of that list
 */

const {findAverage} = require('./library'); 

assert.deepEqual(findAverage([5]),5);//single digit
assert.deepEqual(findAverage([2,4,6,8]),5);//for list
assert.deepEqual(findAverage([1,3,5,0,-7,-4,10,0]),1);//with -ve numbers and zero

/*
 * 10. Mapping lengths - Given a list of names, generate another array that contains the length of each of the names:
 */

const {countLength} = require('./library'); 

assert.deepEqual(countLength(["kolkata"]),[7]);// single word
assert.deepEqual(countLength(["mary","had","a","little","lamb"]),[4, 3, 1, 6, 4]);//list of words 
assert.deepEqual(countLength(["naruto"," ","","japan"]),[6,1,0,5]); // with space & empty string

/*
 * 11. Counting odd numbers - Write a function to count how many odd numbers are present in an array
 */

const {countOddNumbers}= require('./library'); 

assert.deepEqual(countOddNumbers([1]),1);// with one odd
assert.deepEqual(countOddNumbers([1,2,3,4,5,6,7,8]),4);// list of odd and even
assert.deepEqual(countOddNumbers([1,3,-4,-7,0,4,-2,8,0]),3);// containing 0 and -ve values

/*
 * 12. Counting even numbers - Write a function to count how many even numbers are present in an array
 */

const {countEvenNumbers}= require('./library'); 


assert.deepEqual(countEvenNumbers([2]),1);// with one even
assert.deepEqual(countEvenNumbers([1,2,3,4,5,6,7,8]),4);// list of odd and even
assert.deepEqual(countEvenNumbers([1,3,-4,-7,0,4,-2,8,0]),6);// containing 0 and -ve values

/*
 * 13. Count how many numbers above a certain threshold in an array
 */

const {countNosAbovelimit} = require('./library');

assert.deepEqual(countNosAbovelimit([1],0),1);// single digit
assert.deepEqual(countNosAbovelimit([3,4,5,6,1],4),2);// in a list
assert.deepEqual(countNosAbovelimit([1,2,0,-6,-3,-8,0],-5),5);// with 0 & -ve values


/*
 * 14. Count how many numbers below a certain threshold in an array
 */

const {countNosBelowlimit} = require('./library');

assert.deepEqual(countNosBelowlimit([1],2),1);// single digit
assert.deepEqual(countNosBelowlimit([3,4,5,6,1],4),2);// in a list
assert.deepEqual(countNosBelowlimit([1,2,0,-6,-3,-8,0],-5),2);// with 0 & -ve values

/*
 * 15. Reversing an Array - Given an array, write a function that provides a reversed version of the same array *without* changing the contents of the original array.
 */

const {reverseArray} = require('./library');

assert.deepEqual(reverseArray([1]),[1]);// for single element
assert.deepEqual(reverseArray([1,4,-6,0,-2,3]),[3,-2,0,-6,4,1]);// for multi elements
assert.deepEqual(reverseArray([5,"germany",0,"L.A",7]),[7,"L.A",0,"germany",5]);// including strings with nos

/*
 * 16. Index Of a Number - Given an array of numbers find the first position of a specified number
 */

const {findIndex} = require('./library');

assert.deepEqual(findIndex([2],2),0);// single element array
assert.deepEqual(findIndex([1,2,3,4,3,2,3,2,1,2,4],3),2);// multi element array
assert.deepEqual(findIndex([1,4,0,-5,-6,7,-3,0],0),2);// array including 0 and -ve

/*
 * 17. Ascending order - Given an array of numbers, check if the array is in ascending order
 */

const {checkAscendingOrder} = require('./library');

assert.deepEqual(checkAscendingOrder([1]),true);// one element array
assert.deepEqual(checkAscendingOrder([1,2,3,4,5]),true);// multi elements array
assert.deepEqual(checkAscendingOrder([1,2,9,4,5]),false);// multi elements array
assert.deepEqual(checkAscendingOrder([-5,-2,0,5,8]),true);// array with 0 and -ve nos


/*
 * 18. Descending order - Given an array of numbers, check if the array is in descending order
 */

const {checkDescendingOrder} = require('./library');

assert.deepEqual(checkDescendingOrder([1]),true);// one element array
assert.deepEqual(checkDescendingOrder([5,4,3,2]),true);// multi elements array
assert.deepEqual(checkDescendingOrder([1,2,9,4,5]),false);// multi elements array
assert.deepEqual(checkDescendingOrder([8,6,5,2,0,-3,-6]),true);// array with 0 and -ve nos

/*
 * 19. Extract digits - Given a number, extract the digits of a number into an array:
 */

const {extractDigits} = require('./library');

assert.deepEqual(extractDigits(5),[5]);//one element array 
assert.deepEqual(extractDigits(233876),[2,3,3,8,7,6]);// multi elements array
assert.deepEqual(extractDigits(812003),[8,1,2,0,0,3]);// array with 0 


/*
 * 20. Unique - Given an array, remove duplicate elements and return an array of only unique elements.
 */

const {removeDuplicates} = require('./library');

assert.deepEqual(removeDuplicates([2]),[2]); // one element array
assert.deepEqual(removeDuplicates([1,3,5,2,3,1,4,5,2]),[1,3,5,2,4]); // multi elements array
assert.deepEqual(removeDuplicates([1,0,-1,3,-1,-2,0,-2]),[1,0,-1,3,-2]); // including 0 and e

/*
 *  21. Union - Given two arrays, generate a new array consisting of unique elements across both those arrays.
 */

const {makeUnion} = require('./library'); 

assert.deepEqual(makeUnion([1],[2]),[1,2]); // for one elements array
assert.deepEqual(makeUnion([1,2,1,3,4],[3,4,5,6]),[1,2,3,4,5,6]); // for multi elements array
assert.deepEqual(makeUnion([1,2,0,-3,2,1,-4],[2,3,0,-2,-3]),[1,2,0,-3,-4,3,-2]); // including 0 and -ve

/*
 *  22. Intersection - Given two arrays, generate a new array consisting of unique elements that are contained in both arrays.
 */

const {makeIntersection} = require('./library'); 

assert.deepEqual(makeIntersection([1],[1]),[1]); // for one elements array
assert.deepEqual(makeIntersection([1],[2]),[]); // for one elements array
assert.deepEqual(makeIntersection([1,3,4,5,6],[6,8,3,9]),[3,6]); // for multi elements array
assert.deepEqual(makeIntersection([1,0,-7,0,6,-5],[0,7,-7,-5,1,1,1,0]),[1,0,-7,-5]); // including 0 and -ve

/*
 *  23. Difference - Given two arrays, generate a new array that consists of unique elements that are present in the first array, but not in the second.
 */

const {findDifference} = require('./library'); 

assert.deepEqual(findDifference([1],[1]),[]); // for one element
assert.deepEqual(findDifference([1],[2]),[1]); // for one element
assert.deepEqual(findDifference([1,2,3,4,5],[3,4,5,6,7,8]),[1,2]); // for multi elements
assert.deepEqual(findDifference([1,-1,0,2,-3,6],[6,-3,-4,-1,3]),[1,0,2]); // including 0 & -ve

/*
 *  24. isSubset - Given two arrays, check if the second is a proper subset of the first.
 */

const {isSubset} = require('./library'); 

assert.deepEqual(isSubset([1],[]),true); //for one element set 
assert.deepEqual(isSubset([1],[1]),false); //subset but not proper
assert.deepEqual(isSubset([1,2,3],[1,2,3]),false); //subset but not proper
assert.deepEqual(isSubset([1,2,4,6,7,8],[2,4,6]),true); //proper subset
assert.deepEqual(isSubset([1,2,4,6,7,8],[4,6,2]),true); //proper subset
assert.deepEqual(isSubset([1,2,4,6,7,8],[4,6,2,0]),false); //proper subset
assert.deepEqual(isSubset([1,0,-4,0,-5,7,8,1],[0,-4,-5,1]),true); //including 0 and -ve values

/*
 *  25. Zip - insert elements from two arrays as follows:
 */

const {zip} = require('./library'); 

assert.deepEqual(zip([1],[2]),[[1,2]]); // for one element array
assert.deepEqual(zip([1,2,3],[4,5,6]),[[1,4],[2,5],[3,6]]); // for multi element array
assert.deepEqual(zip([-2,0,5],[0,7,-1]),[[-2,0],[0,7],[5,-1]]); // including 0 and -ve nos
assert.deepEqual(zip([1,4,0,-6],[-3,0,-6]),[[1,-3],[4,0],[0,-6]]); // for unequal arrays



console.log("---------- Everything is fine -------------");
