const {logHeading,testFunction, logDottedLine} = require('../../testFramework/testFrameworkLibrary.js');

logHeading();

/*
 * 1. Selecting odd numbers - Given a list of numbers, select the ones that are odd
 */
const selectOdds = require('./library').selectOddNumbers;
const assert = require('assert');

//checking with one odd:
testFunction(selectOdds,[[1]],[1]);

//checking with odd and even:
testFunction(selectOdds,[[1,2]],[1]);

//checking with list of odds:
testFunction(selectOdds,[[1,3,4,5,6,7,8]],[1,3,5,7]);

//edge case - with 0:
testFunction(selectOdds,[[1,2,0]],[1]);

//edge case - with negative nos:
testFunction(selectOdds,[[1,-3,4]],[1,-3]); 

logDottedLine();

/*
 * 2. Selecting even numbers - Given a list of numbers, select the ones that are even
 */

const selectEvens = require('./library').selectEvenNumbers;

//checking with one even:
testFunction(selectEvens,[[6]],[6]);

//checking with one  even and one even:
testFunction(selectEvens,[[1,2]],[2]);

//checking with a list:
testFunction(selectEvens,[[1,3,4,5,6,7,8]],[4,6,8]);

//edge case - with 0:
testFunction(selectEvens,[[1,2,0]],[2,0]);

//edge case - with negative nos:
testFunction(selectEvens,[[1,-3,-4,8]],[-4,8]);

logDottedLine();

/*
 * 3. Sum of a list of numbers - Given a list of numbers, find the sum of all these numbers
 */

const sumOfaListOfNumbers = require('./library').sumOfaListOfNumbers;

testFunction(sumOfaListOfNumbers,[[2]],2);//single_element
testFunction(sumOfaListOfNumbers,[[2,4,6,3,5,7,0]],27);//list

logDottedLine();

/*
 * 4. Printing reverse - Given a list of numbers, PRINT the list in reverse order
 */
const printReverse = require('./library').printReverse;

testFunction(printReverse,[[1]],[1]); //single digit
testFunction(printReverse,[[1,2,3]],[3,2,1]); //simple list
testFunction(printReverse,[[9,-4,-5,1,2,-6]],[-6,2,1,-5,-4,9]); //negative numbers

logDottedLine();

/*
 *5. Selecting every second element - Given a list of numbers, select every second one:
 */

const selectEverySecondElement = require('./library').selectEverySecondElement;

testFunction(selectEverySecondElement,[[2,3,4,5,6]],[2,4,6]); //list starting with even & odd no of elements
testFunction(selectEverySecondElement,[[1,2,3,4,5,6]],[1,3,5]); //list starting with odd & even no of elements
testFunction(selectEverySecondElement,[[1,2,-3,-4,5,0,6,7,0]],[1,-3,5,6,0]); //negative numbers and zero

logDottedLine();

/*
 *6. Reverse Fibonacci - Generate a fibonacci sequence of length n in reverse order
 */

const fiboReverse = require('./library').fiboReverse;

testFunction(fiboReverse,[1],[0]); //for single digit
testFunction(fiboReverse,[2],[1,0]); //for length two 
testFunction(fiboReverse,[8],[13, 8, 5, 3, 2, 1, 1, 0]); //for series 

logDottedLine();

/*
 * 7. Greatest number in a list - Given a list of numbers, find the greatest number in that sequence
 */

const {findGreatestNumber} = require('./library');

testFunction(findGreatestNumber,[[4]],4); //for single digit
testFunction(findGreatestNumber,[[1,3,4,15,5,6,7]],15); //for list  
testFunction(findGreatestNumber,[[1,3,-5,0,-10,10,0,6]],10); // for negative nos and zero

logDottedLine();

/*
 * 8. Lowest number in a list - Given a list of numbers, find the lowest number in that sequence
 */

const {findLowestNumber} = require('./library'); 

testFunction(findLowestNumber,[[1]],1);//for single digit
testFunction(findLowestNumber,[[1,4,5,6,7]],1);// for list
testFunction(findLowestNumber,[[1,3,4,0,-5,7,-10,5]],-10);// for -ve nos and zero

logDottedLine();

/*
 * 9. Average of a list - Given a list of numbers, find the average of that list
 */

const {findAverage} = require('./library'); 

testFunction(findAverage,[[5]],5);//single digit
testFunction(findAverage,[[2,4,6,8]],5);//for list
testFunction(findAverage,[[1,3,5,0,-7,-4,10,0]],1);//with -ve numbers and zero

logDottedLine();

/*
 * 10. Mapping lengths - Given a list of names, generate another array that contains the length of each of the names:
 */

const {countLength} = require('./library'); 

testFunction(countLength,[["kolkata"]],[7]);// single word
testFunction(countLength,[["mary","had","a","little","lamb"]],[4, 3, 1, 6, 4]);//list of words 
testFunction(countLength,[["naruto"," ","","japan"]],[6,1,0,5]); // with space & empty string

logDottedLine();

/*
 * 11. Counting odd numbers - Write a function to count how many odd numbers are present in an array
 */

const {countOddNumbers}= require('./library'); 

testFunction(countOddNumbers,[[1]],1);// with one odd
testFunction(countOddNumbers,[[1,2,3,4,5,6,7,8]],4);// list of odd and even
testFunction(countOddNumbers,[[1,3,-4,-7,0,4,-2,8,0]],3);// containing 0 and -ve values

logDottedLine();

/*
 * 12. Counting even numbers - Write a function to count how many even numbers are present in an array
 */

const {countEvenNumbers}= require('./library'); 


testFunction(countEvenNumbers,[[2]],1);// with one even
testFunction(countEvenNumbers,[[1,2,3,4,5,6,7,8]],4);// list of odd and even
testFunction(countEvenNumbers,[[1,3,-4,-7,0,4,-2,8,0]],6);// containing 0 and -ve values

logDottedLine();

/*
 * 13. Count how many numbers above a certain threshold in an array
 */

const {countNosAbovelimit} = require('./library');

testFunction(countNosAbovelimit,[[1],0],1);// single digit
testFunction(countNosAbovelimit,[[3,4,5,6,1],4],2);// in a list
testFunction(countNosAbovelimit,[[1,2,0,-6,-3,-8,0],-5],5);// with 0 & -ve values

logDottedLine();

/*
 * 14. Count how many numbers below a certain threshold in an array
 */

const {countNosBelowlimit} = require('./library');

testFunction(countNosBelowlimit,[[1],2],1);// single digit
testFunction(countNosBelowlimit,[[3,4,5,6,1],4],2);// in a list
testFunction(countNosBelowlimit,[[1,2,0,-6,-3,-8,0],-5],2);// with 0 & -ve values

logDottedLine();

/*
 * 15. Reversing an Array - Given an array, write a function that provides a reversed version of the same array *without* changing the contents of the original array.
 */

const {reverseArray} = require('./library');

testFunction(reverseArray,[[1]],[1]);// for single element
testFunction(reverseArray,[[1,4,-6,0,-2,3]],[3,-2,0,-6,4,1]);// for multi elements
testFunction(reverseArray,[[5,"germany",0,"L.A",7]],[7,"L.A",0,"germany",5]);// including strings with nos

logDottedLine();

/*
 * 16. Index Of a Number - Given an array of numbers find the first position of a specified number
 */

const {findIndex} = require('./library');

testFunction(findIndex,[[2],2],0);// single element array
testFunction(findIndex,[[1,2,3,4,3,2,3,2,1,2,4],3], 2);// multi element array
testFunction(findIndex,[[1,4,0,-5,-6,7,-3,0],0], 2);// array including 0 and -ve

logDottedLine();

/*
 * 17. Ascending order - Given an array of numbers, check if the array is in ascending order
 */

const {checkAscendingOrder} = require('./library');

testFunction(checkAscendingOrder,[[1]],true);// one element array
testFunction(checkAscendingOrder,[[1,2,3,4,5]],true);// multi elements array
testFunction(checkAscendingOrder,[[1,2,9,4,5]],false);// multi elements array
testFunction(checkAscendingOrder,[[-5,-2,0,5,8]],true);// array with 0 and -ve nos

logDottedLine();

/*
 * 18. Descending order - Given an array of numbers, check if the array is in descending order
 */

const {checkDescendingOrder} = require('./library');

testFunction(checkDescendingOrder,[[1]],true);// one element array
testFunction(checkDescendingOrder,[[5,4,3,2]],true);// multi elements array
testFunction(checkDescendingOrder,[[1,2,9,4,5]],false);// multi elements array
testFunction(checkDescendingOrder,[[8,6,5,2,0,-3,-6]],true);// array with 0 and -ve nos

logDottedLine();

/*
 * 19. Extract digits - Given a number, extract the digits of a number into an array:
 */

const {extractDigits} = require('./library');

testFunction(extractDigits,[5],[5]);//one element array 
testFunction(extractDigits,[233876],[2,3,3,8,7,6]);// multi elements array
testFunction(extractDigits,[812003],[8,1,2,0,0,3]);// array with 0 

logDottedLine();

/*
 * 20. Unique - Given an array, remove duplicate elements and return an array of only unique elements.
 */

const {removeDuplicates} = require('./library');

testFunction(removeDuplicates,[[2]],[2]); // one element array
testFunction(removeDuplicates,[[1,3,5,2,3,1,4,5,2]],[1,3,5,2,4]); // multi elements array
testFunction(removeDuplicates,[[1,0,-1,3,-1,-2,0,-2]],[1,0,-1,3,-2]); // including 0 and e

logDottedLine();

/*
 *  21. Union - Given two arrays, generate a new array consisting of unique elements across both those arrays.
 */

const {makeUnion} = require('./library'); 

testFunction(makeUnion,[[1],[2]],[1,2]); // for one elements array
//testFunction(makeUnion,[[1,2,1,3,4],[3,4,5,6]],[1,2,3,4,5,6]); // for multi elements array
testFunction(makeUnion,[[1,2,0,-3,2,1,-4],[2,3,0,-2,-3]],[1,2,0,-3,-4,3,-2]); // including 0 and -ve

logDottedLine();

/*
 *  22. Intersection - Given two arrays, generate a new array consisting of unique elements that are contained in both arrays.
 */

const {makeIntersection} = require('./library'); 

testFunction(makeIntersection,[[1],[1]],[1]); // for one elements array
testFunction(makeIntersection,[[1],[2]],[]); // for one elements array
testFunction(makeIntersection,[[1,3,4,5,6],[6,8,3,9]],[3,6]); // for multi elements array
testFunction(makeIntersection,[[1,0,-7,0,6,-5],[0,7,-7,-5,1,1,1,0]],[1,0,-7,-5]); // including 0 and -ve

logDottedLine();

/*
 *  23. Difference - Given two arrays, generate a new array that consists of unique elements that are present in the first array, but not in the second.
 */

const {findDifference} = require('./library'); 

testFunction(findDifference,[[1],[1]],[]); // for one element
testFunction(findDifference,[[1],[2]],[1]); // for one element
testFunction(findDifference,[[1,2,3,4,5,2],[3,4,5,6,7,8]],[1,2]); // for multi elements
testFunction(findDifference,[[1,-1,0,2,-3,6],[6,-3,-4,-1,3]],[1,0,2]); // including 0 & -ve

logDottedLine();

/*
 *  24. isSubset - Given two arrays, check if the second is a proper subset of the first.
 */

const {isSubset} = require('./library'); 

testFunction(isSubset,[[1],[]],true); //for one element set 
testFunction(isSubset,[[1],[1]],false); //subset but not proper
testFunction(isSubset,[[1,2,3],[1,2,3]],false); //subset but not proper
testFunction(isSubset,[[1,2,4,6,7,8],[2,4,6]],true); //proper subset
testFunction(isSubset,[[1,2,4,6,7,8],[4,6,2]],true); //proper subset
testFunction(isSubset,[[1,2,4,6,7,8],[4,6,2,0]],false); //proper subset
testFunction(isSubset,[[1,0,-4,0,-5,7,8,1],[0,-4,-5,1]],true); //including 0 and -ve values

logDottedLine();

/*
 *  25. Zip - insert elements from two arrays as follows:
 */

const {zip} = require('./library'); 

testFunction(zip,[[1],[2]],[[1,2]]); // for one element array
testFunction(zip,[[1,2,3],[4,5,6]],[[1,4],[2,5],[3,6]]); // for multi element array
testFunction(zip,[[-2,0,5],[0,7,-1]],[[-2,0],[0,7],[5,-1]]); // including 0 and -ve nos
testFunction(zip,[[1,4,0,-6],[-3,0,-6]],[[1,-3],[4,0],[0,-6]]); // for unequal arrays

logDottedLine();

/*
 *  26. Rotate - creates a new array by rotating elements from the given array.
 */

const {rotate} = require('./library'); 

testFunction(rotate,[[1],1],[1]); // single element
testFunction(rotate,[[1,2],1],[2,1]); // double element
testFunction(rotate,[[1,2,3],0],[1,2,3]); // double element
testFunction(rotate,[[1,2,3],1],[2,3,1]); // double element
testFunction(rotate,[[1,2,3,4,5],4],[5,1,2,3,4]); // multiple elements
testFunction(rotate,[[1,-2,0,4,-5],4],[-5,1,-2,0,4]); // multiple elements

logDottedLine();

/*
 *  27. Partition - Given an array of numbers, it returns a partitioned array consisting of numbers above a certain number and below a certain number
 */

const {partitionArray} = require('./library'); 

testFunction(partitionArray,[[1,2],1],[[1],[2]]); // single element array
testFunction(partitionArray,[[1,2,7,4,9,10,5],5],[[1,2,4,5], [7,9,10]]); // multi element array
testFunction(partitionArray,[[1,-3,5,-4,0,6,2,3],1],[[1,-3,-4,0],[5,6,2,3]]); // including 0 and -ve


console.log("\n\n---------- Everything is fine -------------\n");

