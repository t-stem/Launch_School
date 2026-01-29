/*
Create a function that takes an array of integers as an argument and returns the integer that appears an odd number of times. 

There will always be exactly one such integer in the input array.

PROBLEM:
- Inputs: array of integers 
- Output: the integer that appears an odd number of times

Explicit rules:
- There will always be exactly one such integer in the input array


EXAMPELS: 

DATA STRUCTURES
  - Tally {number: count}
  - [filtered array for specific int]

ALGORITHM:
1) 
- Loop through the array
- For every element
  * Filter the entire array for values equal to currentElement
  * IF length of filtered array is odd
    RETURN currentInt
2)
- Loop through the array
  * IF currentElement exists in tally
    SET count increase by 1;
  * ELSE
    SET count = 1

- Loop through properties of object
  - IF count of current property is odd
    RETURN current key
*/

function isOdd(integer) {
  return integer % 2 !== 0;
}

function oddFellow2(intsArray) {
  for (let currInt of intsArray) {
    let count = intsArray
      .filter(int => int === currInt)
      .length;
  
    if (isOdd(count)) return currInt;
  }
}

function oddFellow(inputArray) {
  let tally = {};

  inputArray.forEach(integer => {
    if (Object.keys(tally).includes(String(integer))) {
      tally[integer] += 1;
    } else {
      tally[integer] = 1;
    }
  })
  
  let counts = Object.entries(tally);

  for (let [int, count] of counts) {
    if (isOdd(count)) return Number(int);
  }
}

const p = console.log;
p(oddFellow([4]) === 4);
p(oddFellow([7, 99, 7, 51, 99]) === 51);
p(oddFellow([7, 99, 7, 51, 99, 7, 51]) === 7);
p(oddFellow([25, 10, -6, 10, 25, 10, -6, 10, -6]) === -6);
p(oddFellow([0, 0, 0]) === 0);