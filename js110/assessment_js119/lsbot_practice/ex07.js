/*
Create a function that takes an array of unique integers from 0 to n as an argument, 
where n is the length of the array. The array is guaranteed to be missing exactly one number from that sequence. 

Your function should find and return the missing number.

PROBLEM:
- Input: array of unique integers from 0 to n
- Output: should find and return the missing number

Explicit rules:
- The array is guaranteed to be missing exactly one number from that sequence. 

DATA STRUCTURES:

ALGORITHM:
- SET neededLength = length + 1;
- Find neededSum
  * For length neede array
      add i to sum at every iteration

- Find actual sum
- Missing number = neededSum - actualSum


*/

function findNeededSum(inputArray) {
  let length = inputArray.length;
  let sum = 0;

  for (let i = 0; i <= length; i += 1) {
    sum += i
  }

  return sum;
}

function findMissingNumber(array) {
  if (array.length === 0) return 0;

  let actualSum = array.reduce((sum, num) => num + sum, 0);
  let neededSum = findNeededSum(array);
  
  return neededSum - actualSum;
}


const p = console.log;

p(findMissingNumber([3, 0, 1]) === 2); // 6 needed
p(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]) === 8); // 45 needed
p(findMissingNumber([0, 1]) === 2); // 3 needed
p(findMissingNumber([0]) === 1); // 1 needed
p(findMissingNumber([]) === 0); // 0 needed