/*
Create a function that takes an array of integers as an argument. 

Determine and return the index N for which all numbers with an index less than N sum to the same value as the numbers 

with an index greater than N. If there is no index that would make this happen, return -1.

If you are given an array with multiple answers, return the index with the smallest value.


PROBLEM:
- inputs: array of integers
- outputs: 
  * the index N for which all numbers with an index less than N sum to the same value as the numbers with an index greater than N.
  * If there is no index that would make this happen, return -1.
  * If you are given an array with multiple answers, return the index with the smallest value.

- Explicit rules
  *

EXAMPLES


DATA STRUCTURES
- [input]

- [[sum left, sum right]]

- {index: [sum left, sum right]}


ALGORITHM
- SET totalSum = sum of full array
- SET sumLeft = 0
- SET sumRight = totalSum - array[0]

- WHILE sumLeft !== sumRight
  SET sumLeft += previousElement
  SET sumRight -= currentElement
  IF sumLeft === sumRight
    return currentIndex
  ELSE 
    SET previousElement = currentElement
    SET currentElement = nextElement

- RETURN -1;
*/

function equalSumIndex2(intsArray) {
  let arraySum = intsArray.reduce((sum, element) => sum + element, 0);
  let sumLeft = 0;
  let sumRight = arraySum;
  let previousElement = 0;

  for (let currIndex = 0; currIndex < intsArray.length; currIndex += 1) {
    let currentElement = intsArray[currIndex];

    sumLeft += previousElement;
    sumRight -= currentElement;

    if (sumLeft === sumRight) return currIndex;

    previousElement = currentElement;
  }

  return -1;
}

function equalSumIndex(inputArray) {
  let totalSum = inputArray.reduce((sum, int) => sum + int, 0);
  let sumRight = totalSum;
  let sumLeft = 0;

  let sumsArray = inputArray.map((currInt, currIndex) => {
    let previousInt = currIndex === 0 ? 0 : inputArray[currIndex - 1];

    sumLeft += previousInt;
    sumRight -= currInt;

    return [sumLeft, sumRight];
  })

  let equalsArray = sumsArray.map(([left, right]) => left === right);
  
  return equalsArray.includes(true) ? equalsArray.indexOf(true) : -1;
}

const p = console.log;
p(equalSumIndex([1, 2, 4, 4, 2, 3, 2]) === 3); 0/17, 1/15, 3/11, 7/7, 11/5, 13/2, 16/0
p(equalSumIndex([7, 99, 51, -48, 0, 4]) === 1);
p(equalSumIndex([17, 20, 5, -60, 10, 25]) === 0);
p(equalSumIndex([0, 2, 4, 4, 2, 3, 2]) === -1);

// The following test case could return 0 or 3. Since we're
// supposed to return the smallest correct index, the correct
// return value is 0.
p(equalSumIndex([0, 20, 10, -60, 5, 25]) === 0);
