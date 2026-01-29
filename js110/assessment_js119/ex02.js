/*
Create a function that takes an array of integers as an argument. 
The function should return the minimum sum of 5 consecutive numbers in the array. 

If the array contains fewer than 5 elements, the function should return null.

PROBLEM:
- input: array of ints
- output: min sum of 5 consecutive numbers in array

- explicit rules:
  * if length < 5, return null

EXAMPLES

DATA STRUCTURES:
- Array - tranform into array out counts?
- 

ALGORITHM
- IF length < 5
  RETURN null

- For every number in the array, starting from index 4
  - Calculate the sum of previous five numbers
  - Push value to sumsArray

- Return min value of sums array
  - sort the array ascending
  - take the first value


*/

function minimumSum(inputArray) { 
  if (inputArray.length < 5) {
    return null;
  }

  let sumsArray = [];

  for (let i = 5; i <= inputArray.length; i += 1) {
    let sum = inputArray
      .slice(i - 5, i)
      .reduce((sum, num) => sum + num, 0);

    sumsArray.push(sum);
  }

  sumsArray.sort((a, b) => a - b);

  return sumsArray[0];
}


const p = console.log;
p(minimumSum([1, 2, 3, 4]) === null);
p(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
p(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
p(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
p(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);