/*
Create a function that takes an array of numbers as an argument. 
For each number, determine how many numbers in the array are smaller than it, and place the answer in an array. 

Return the resulting array.

When counting numbers, only count unique values. 
That is, if a number occurs multiple times in the array, it should only be counted once.

PROBLEM:
- Inputs: array of numbers
- Outputs: array of counts (how many smaller numbers than each element)

- Explicit rules: only count unique values. (helper step in algo?)
  * if a number occurs multiple times in the array, it should only be counted once.

Implicit rules:
  * output length = input length
  * inputArray is transformed into output array

EXAMPLES
- 

DATA STRUCTURES
- arrays

ALGORITH
1)
- loop through numbers in inputArray
  - check if number exists in uniqueValues array
    if not, add to unique values

- loop through numbers in inputArray
  * loop through numbers in uniqueValues
    * if uniqueValue < currentNumber
      - increase counter by 1
  * add counter to outputArray
*/

function getUniqueValues(arr) {
  let uniqueValues = [];

  for (let value of arr) {
    if (!uniqueValues.includes(value)) {
      uniqueValues.push(value);
    }
  }

  return uniqueValues
}

function countUniqueSmallerThan(uniqueArray, num) {
  let counter = 0;

  uniqueArray.forEach(uniqueValue => {
    if (uniqueValue < num) {
      counter += 1;
    }
  });

  return counter;
}

function smallerNumbersThanCurrent(inputArray) {
  let uniqueValues = getUniqueValues(inputArray);

  return inputArray.map(number => countUniqueSmallerThan(uniqueValues, number));
}

const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(smallerNumbersThanCurrent([8, 1, 2, 2, 3]), [3, 0, 1, 1, 2]));
p(eq(smallerNumbersThanCurrent([7, 7, 7, 7]), [0, 0, 0, 0]));
p(eq(smallerNumbersThanCurrent([6, 5, 4, 8]), [2, 1, 0, 3]));
p(eq(smallerNumbersThanCurrent([1]), [0]));

let myArray = [1, 4, 6, 8, 13, 2, 4, 5, 4];
let result = [0, 2, 4, 5, 6, 1, 2, 3, 2];
p(eq(smallerNumbersThanCurrent(myArray), result));