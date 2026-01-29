/*
Create a function that takes an array of numbers, all of which are the same except one. 

Find and return the number in the array that differs from all the rest.

The array will always contain at least 3 numbers, and there will always be exactly one number that is different.

PROBLEM: 
- inputs: array of numbers, all of which are the same except one. 
- outputs: Find and return the number in the array that differs from all the rest.

- explicit rules
  * The array will always contain at least 3 numbers
  * there will always be exactly one number that is different.

EXAMPLES:

DATA STRUCTURES:
- [numbers searched]
- {number: count}

ALGORITHM:
1) 
- Sort array ascending
- IF number0 equals number1
  return last element of sortedArray
  ELSE
  return first element of sortedArray
*/

function whatIsDifferent(intsArray) {
  let sortedArray = intsArray.sort((a, b) => a - b);
  
  if (sortedArray[0] === sortedArray[1]) return sortedArray[sortedArray.length - 1];

  return sortedArray[0];
}


const p = console.log;
p(whatIsDifferent([0, 1, 0]) === 1);
p(whatIsDifferent([7, 7, 7, 7.7, 7]) === 7.7);
p(whatIsDifferent([1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1]) === 11);
p(whatIsDifferent([3, 4, 4, 4]) === 3);
p(whatIsDifferent([4, 4, 4, 3]) === 3); // order matters