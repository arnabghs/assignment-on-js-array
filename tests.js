const {logHeading,testFunction, logDottedLine} = require('../../testFramework/testFrameworkLibrary.js');

logHeading();

const assert = require('assert');

/* 1. Selecting odd numbers - Given a list of numbers, select the ones that are odd */

const selectOddNumbers = require('./library').selectOddNumbers; // TODO - put all requires at the top. so that I know what you're getting from the library. This is contrary to assert where I already know what you can potentially get.
// TODO why is selectOddNumbers different from selectOddNumbers?

// TODO fix the comma thing

//empty array as input: 
testFunction(selectOddNumbers,[[]],[]);

//checking with one odd:
testFunction(selectOddNumbers,[[1]],[1]);

//checking with odd and even: // 
testFunction(selectOddNumbers,[[1,2]],[1]);

//checking with even and odd: // 
testFunction(selectOddNumbers,[[2,1]],[1]);

//checking with list of odds:
testFunction(selectOddNumbers,[[1,3,4,5,6,7,8]],[1,3,5,7]);

//edge case - with 0: TODO why is 0 an edge case?
testFunction(selectOddNumbers,[[1,2,0]],[1]);

//edge case - with negative nos: TODO whats nos
testFunction(selectOddNumbers,[[1,-3,4]],[1,-3]); 

logDottedLine(); // TODO later you can see how to register your tests with your framework so that you don't have to log things in the the test file. 
/*
 *
 * registerTestGroup([testFunctionOdd1;testFunc2;testFunc3;testFunc4])  THIS should be either register or runTestGroup
 * registerTestGroup([testFunctionEven1,testFunctionEven2;testFunctionEven3])
 *
 *
 *  ________________________
 *
 *  const functionWrapper = function(
 *
 *
 *_______________
 ________________
 *  testLoggerLibrary
 *
 *  const runTestGroup = function(tests) {
 *    logDottedLine() // Initialization before
 *    tests.forEach(test => test())
 *    logDottedLine() // Initialization after
 *  }
 *
 * Talk with Rahul for more details.
 *
 */


/*  2. Selecting even numbers - Given a list of numbers, select the ones that are even */

const selectEvens = require('./library').selectEvenNumbers;

//empty array as input:
testFunction(selectEvens,[[]],[]);

//checking with one even:
testFunction(selectEvens,[[6]],[6]);

//checking with one odd and one even:
testFunction(selectEvens,[[1,2]],[2]);

//checking with even and odd: // 
testFunction(selectOddNumbers,[[2,1]],[1]);

//checking with a list:
testFunction(selectEvens,[[1,3,4,5,6,7,8]],[4,6,8]);

//edge case - with 0:
testFunction(selectEvens,[[1,2,0]],[2,0]);

//edge case - with negative nos:
testFunction(selectEvens,[[1,-3,-4,8]],[-4,8]);

logDottedLine();

/*  3. Sum of a list of numbers - Given a list of numbers, find the sum of all these numbers  */

const sumOfaListOfNumbers = require('./library').sumOfaListOfNumbers;
// name - probably the word sum was enough. "ofAListOfNumbers" looks very verbose and unnecessary

// 
// Test cases can be incremental in complexity
// You have a case of no input
// One input
// But then suddenly you have too many inputs
// Never had a case with 2 numbers
// Which would have made more sense... 
//
// Look at Anu's test cases for more details
//
//
//empty array as input:
testFunction(sumOfaListOfNumbers,[[]],0);
//single_element:
testFunction(sumOfaListOfNumbers,[[2]],2);
//list:
testFunction(sumOfaListOfNumbers,[[2,4,6,3,5,7,0]],27);
testFunction(sumOfaListOfNumbers,[[1,2,3,4]],10);
testFunction(sumOfaListOfNumbers,[[1,2,3,4,5,6,7,8,9,10]],55);

logDottedLine();

// Why is this function named print?
/* 4. Printing reverse - Given a list of numbers, PRINT the list in reverse order */ 
const printReverse = require('./library').printReverse;

//empty array as input:
testFunction(printReverse,[[]],[]);
//single digit:
testFunction(printReverse,[[1]],[1]);
//simple list:
testFunction(printReverse,[[1,2,3]],[3,2,1]); 
//negative numbers:
testFunction(printReverse,[[9,-4,-5,1,2,-6]],[-6,2,1,-5,-4,9]); 
//with 0 :
testFunction(printReverse,[[0,1,2,3,4]],[4,3,2,1,0]); 
//with strings :
testFunction(printReverse,[["germany","US","Japan",8]],[8,"Japan","US","germany"]); 

logDottedLine();

/* 5. Selecting every second element - Given a list of numbers, select every second one: */
// Name should be plural... elements not element
const selectAlternateElement = require('./library').selectAlternateElement;

//empty array as input:
testFunction(selectAlternateElement,[[]],[]);
//list starting with even & odd no of elements:
testFunction(selectAlternateElement,[[2,3,4,5,6]],[2,4,6]);
//list starting with odd & even no of elements:
testFunction(selectAlternateElement,[[1,2,3,4,5,6]],[1,3,5]);
//negative numbers and zero:
testFunction(selectAlternateElement,[[1,2,-3,-4,5,0,6,7,0]],[1,-3,5,6,0]); 
//with strings:
testFunction(selectAlternateElement,[['a','b','c','d']],['a','c']); 
logDottedLine();

/* 6. Reverse Fibonacci - Generate a fibonacci sequence of length n in reverse order */

const fiboReverse = require('./library').fiboReverse;

//empty array as input:
testFunction(fiboReverse,[0],[]);
//for single digit:
testFunction(fiboReverse,[1],[0]); 
//for length two:
testFunction(fiboReverse,[2],[1,0]);
//for series:
testFunction(fiboReverse,[8],[13, 8, 5, 3, 2, 1, 1, 0]); 
testFunction(fiboReverse,[5],[3, 2, 1, 1, 0]);

logDottedLine();

/* 7. Greatest number in a list - Given a list of numbers, find the greatest number in that sequence */

const {findGreatestNumber} = require('./library');

//for single digit:
testFunction(findGreatestNumber,[[4]],4);
//for list:
testFunction(findGreatestNumber,[[1,3,4,15,5,6,7]],15);
//for negatives:
testFunction(findGreatestNumber,[[-1,-2,-3,-4]],-1);
// for negative nos and zero
testFunction(findGreatestNumber,[[1,3,-5,0,-10,10,0,6]],10); 

logDottedLine();

/* 8. Lowest number in a list - Given a list of numbers, find the lowest number in that sequence */

const {findLowestNumber} = require('./library'); 

//for single digit:
testFunction(findLowestNumber,[[1]],1);
// for list:
testFunction(findLowestNumber,[[1,4,5,6,7]],1);
//for negative:
testFunction(findLowestNumber,[[-1,-2,-3,-4]],-4);
// for -ve nos and zero:
testFunction(findLowestNumber,[[1,3,4,0,-5,7,-10,5]],-10);

logDottedLine();

/* 9. Average of a list - Given a list of numbers, find the average of that list */

const {findAverage} = require('./library'); 

//single digit
testFunction(findAverage,[[5]],5);
//for list:
testFunction(findAverage,[[2,4,6,8]],5);
//with -ve numbers and zero:
testFunction(findAverage,[[1,3,5,0,-7,-4,10,0]],1);
//for decimal values:
testFunction(findAverage,[[1,2,10,20]],8.25);

logDottedLine();

/* 10. Mapping lengths - Given a list of names, generate another array that contains the length of each of the names */

const {countLength} = require('./library'); 

//empty array as input:
testFunction(countLength,[[]],[]);
// single word:
testFunction(countLength,[["kolkata"]],[7]);
//list of words :
testFunction(countLength,[["mary","had","a","little","lamb"]],[4, 3, 1, 6, 4]);
// with space & empty string:
testFunction(countLength,[["naruto"," ","","japan"]],[6,1,0,5]);

logDottedLine();

/* 11. Counting odd numbers - Write a function to count how many odd numbers are present in an array */

const {countOddNumbers}= require('./library'); 

//empty array as input:
testFunction(countOddNumbers,[[]],0);
// with one odd:
testFunction(countOddNumbers,[[1]],1);
// list of odd and even:
testFunction(countOddNumbers,[[1,2,3,4,5,6,7,8]],4);
// containing 0 and -ve values:
testFunction(countOddNumbers,[[1,3,-4,-7,0,4,-2,8,0]],3)
;
logDottedLine();

/* 12. Counting even numbers - Write a function to count how many even numbers are present in an array */

const {countEvenNumbers}= require('./library'); 

//empty array as input:
testFunction(countEvenNumbers,[[]],0);
// with one even:
testFunction(countEvenNumbers,[[2]],1);
// list of odd and even:
testFunction(countEvenNumbers,[[1,2,3,4,5,6,7,8]],4);
// containing 0 and -ve values:
testFunction(countEvenNumbers,[[1,3,-4,-7,0,4,-2,8,0]],6)
;
logDottedLine();

/* 13. Count how many numbers above a certain threshold in an array */

const {countNosAbovelimit} = require('./library');

//empty array as input:
testFunction(countNosAbovelimit,[[],1],0);
// single digit:
testFunction(countNosAbovelimit,[[1],0],1);
// in a list:
testFunction(countNosAbovelimit,[[3,4,5,6,1],4],2);
// with 0 & -ve values:
testFunction(countNosAbovelimit,[[1,2,0,-6,-3,-8,0],-5],5)
;
logDottedLine();

/* 14. Count how many numbers below a certain threshold in an array */

const {countNosBelowlimit} = require('./library');

//empty array as input:
testFunction(countNosBelowlimit,[[],1],0);
// single digit:
testFunction(countNosBelowlimit,[[1],2],1);
// in a list:
testFunction(countNosBelowlimit,[[3,4,5,6,1],4],2);
// with 0 & -ve values:
testFunction(countNosBelowlimit,[[1,2,0,-6,-3,-8,0],-5],2)
;
logDottedLine();

/* 15. Reversing an Array - Given an array, write a function that provides a reversed version of the same array *without* changing the contents of the original array */

const {reverseArray} = require('./library');

// for single element:
testFunction(reverseArray,[[1]],[1]);
// for multi elements:
testFunction(reverseArray,[[1,4,-6,0,-2,3]],[3,-2,0,-6,4,1]);
// including strings with nos:
testFunction(reverseArray,[[5,"germany",0,"L.A",7]],[7,"L.A",0,"germany",5]);
logDottedLine();

/* 16. Index Of a Number - Given an array of numbers find the first position of a specified number */

const {findIndex} = require('./library');

//empty array as input:
testFunction(findIndex,[[],2],-1);
// single element array:
testFunction(findIndex,[[2],2],0);
// multi element array:
testFunction(findIndex,[[1,2,3,4,3,2,3,2,1,2,4],3], 2);
// array including 0 and -ve:
testFunction(findIndex,[[1,4,0,-5,-6,7,-3,0],0], 2)
;
logDottedLine();

/* 17. Ascending order - Given an array of numbers, check if the array is in ascending order */

const {checkAscendingOrder} = require('./library');

//empty array as input:
testFunction(checkAscendingOrder,[[]],true);
// one element array:
testFunction(checkAscendingOrder,[[1]],true);
// multi elements array:
testFunction(checkAscendingOrder,[[1,2,3,4,5]],true);
//array with same value twice:
testFunction(checkAscendingOrder,[[1,1,2,3,3,4,5]],true);
// multi elements array:
testFunction(checkAscendingOrder,[[1,2,9,4,5]],false);
// array with 0 and -ve nos:
testFunction(checkAscendingOrder,[[-5,-2,0,5,8]],true)
;
logDottedLine();

/* 18. Descending order - Given an array of numbers, check if the array is in descending order */

const {checkDescendingOrder} = require('./library');

//empty array as input:
testFunction(checkDescendingOrder,[[]],true);
// one element array:
testFunction(checkDescendingOrder,[[1]],true);
// multi elements array:
testFunction(checkDescendingOrder,[[5,4,3,2]],true);
// multi elements array:
testFunction(checkDescendingOrder,[[1,2,9,4,5]],false);
//array with same value twice:
testFunction(checkDescendingOrder,[[5,5,4,4,3,2,1]],true);
// array with 0 and -ve nos:
testFunction(checkDescendingOrder,[[8,6,5,2,0,-3,-6]],true);
logDottedLine();

/* 19. Extract digits - Given a number, extract the digits of a number into an array: */

const {extractDigits} = require('./library');

//one element array :
testFunction(extractDigits,[5],[5]);
// multi elements array:
testFunction(extractDigits,[233876],[2,3,3,8,7,6]);
// array with 0 :
testFunction(extractDigits,[812003],[8,1,2,0,0,3])
;
logDottedLine();

/* 20. Unique - Given an array, remove duplicate elements and return an array of only unique elements. */

const {removeDuplicates} = require('./library');

//empty array as input:
testFunction(removeDuplicates,[[]],[]);
// one element array:
testFunction(removeDuplicates,[[2]],[2]); 
// multi elements array:
testFunction(removeDuplicates,[[1,3,5,2,3,1,4,5,2]],[1,3,5,2,4]); 
// including 0 and e:
testFunction(removeDuplicates,[[1,0,-1,3,-1,-2,0,-2]],[1,0,-1,3,-2]);

logDottedLine();

/*  21. Union - Given two arrays, generate a new array consisting of unique elements across both those arrays */

const {makeUnion} = require('./library'); 

//empty array as input:
testFunction(makeUnion,[[],[]],[]);
// for one elements array:
testFunction(makeUnion,[[1],[2]],[1,2]); 
// for multi elements array:
testFunction(makeUnion,[[1,2,1,3,4],[3,4,5,6]],[1,2,3,4,5,6]); 
// including 0 and -ve:
testFunction(makeUnion,[[1,2,0,-3,2,1,-4],[2,3,0,-2,-3]],[1,2,0,-3,-4,3,-2]);

logDottedLine();

/*  22. Intersection - Given two arrays, generate a new array consisting of unique elements that are contained in both arrays */

const {makeIntersection} = require('./library'); 

//empty array as input:
testFunction(makeIntersection,[[],[]],[]);
// for one elements array:
testFunction(makeIntersection,[[1],[1]],[1]); 
// for one elements array:
testFunction(makeIntersection,[[1],[2]],[]); 
// for multi elements array:
testFunction(makeIntersection,[[1,3,4,5,6],[6,8,3,9]],[3,6]); 
// including 0 and -ve:
testFunction(makeIntersection,[[1,0,-7,0,6,-5],[0,7,-7,-5,1,1,1,0]],[1,0,-7,-5]);

logDottedLine();

/*  23. Difference - Given two arrays, generate a new array that consists of unique elements that are present in the first array, but not in the second */

const {findDifference} = require('./library'); 

//empty array as input:
testFunction(findDifference,[[],[]],[]);
// for one element:
testFunction(findDifference,[[1],[1]],[]); 
// for one element:
testFunction(findDifference,[[1],[2]],[1]); 
// for multi elements:
testFunction(findDifference,[[1,2,3,4,5,2],[3,4,5,6,7,8]],[1,2]); 
// including 0 & -ve:
testFunction(findDifference,[[1,-1,0,2,-3,6],[6,-3,-4,-1,3]],[1,0,2]);

logDottedLine();

/*  24. isSubset - Given two arrays, check if the second is a proper subset of the first */

const {isSubset} = require('./library'); 

//for one element set :
testFunction(isSubset,[[1],[]],true); 
//subset but not proper:
testFunction(isSubset,[[1],[1]],false); 
//subset but not proper:
testFunction(isSubset,[[1,2,3],[1,2,3]],false); 
//proper subset:
testFunction(isSubset,[[1,2,4,6,7,8],[2,4,6]],true); 
//proper subset:
testFunction(isSubset,[[1,2,4,6,7,8],[4,6,2]],true); 
//proper subset:
testFunction(isSubset,[[1,2,4,6,7,8],[4,6,2,0]],false); 
//including 0 and -ve values:
testFunction(isSubset,[[1,0,-4,0,-5,7,8,1],[0,-4,-5,1]],true);

logDottedLine();

/*  25. Zip - insert elements from two arrays as follows: */

const {zip} = require('./library'); 

//empty array as input:
testFunction(zip,[[],[]],[]);
// for one element array:
testFunction(zip,[[1],[2]],[[1,2]]); 
// for multi element array:
testFunction(zip,[[1,2,3],[4,5,6]],[[1,4],[2,5],[3,6]]); 
// including 0 and -ve nos:
testFunction(zip,[[-2,0,5],[0,7,-1]],[[-2,0],[0,7],[5,-1]]); 
// for unequal arrays:
testFunction(zip,[[1,4,0,-6],[-3,0,-6]],[[1,-3],[4,0],[0,-6]]);

logDottedLine();

/*  26. Rotate - creates a new array by rotating elements from the given array */

const {rotate} = require('./library'); 

//empty array as input:
testFunction(rotate,[[],5],[]);
// single element:
testFunction(rotate,[[1],1],[1]); 
// double element:
testFunction(rotate,[[1,2],1],[2,1]); 
// double element:
testFunction(rotate,[[1,2,3],0],[1,2,3]); 
// double element:
testFunction(rotate,[[1,2,3],1],[2,3,1]); 
// multiple elements:
testFunction(rotate,[[1,2,3,4,5],4],[5,1,2,3,4]); 
// multiple elements:
testFunction(rotate,[[1,-2,0,4,-5],4],[-5,1,-2,0,4]);

logDottedLine();

/*  27. Partition - Given an array of numbers, it returns a partitioned array consisting of numbers above a certain number and below a certain number */

const {partitionArray} = require('./library'); 

//empty array as input:
testFunction(partitionArray,[[],5],[[],[]]);
// single element array:
testFunction(partitionArray,[[1,2],1],[[1],[2]]); 
// multi element array:
testFunction(partitionArray,[[1,2,7,4,9,10,5],5],[[1,2,4,5], [7,9,10]]); 
// including 0 and -ve:
testFunction(partitionArray,[[1,-3,5,-4,0,6,2,3],1],[[1,-3,-4,0],[5,6,2,3]]);

// TODO the message could have come from your test library... 
console.log("\n\n---------- Everything is fine -------------\n");

