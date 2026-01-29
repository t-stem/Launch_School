/*
Create a function that takes an array of integers as an argument and returns an array of two numbers that are closest together in value. 

If there are multiple pairs that are equally close, return the pair that occurs first in the array.

PROBLEM
- inputs: array of ints
- output: array of the two elements that are closest together in value

explicit rules
- if there are multiple pairs, return the one that occurs first

implicit rules
- pair are not necessarily contiguous


- array of pairs (to check which one has the smallest difference)

questions
- 

EXAMPLES

DATA STRUCTURES:
- arrays of ints
- pair array
  * pair can have a difference property

ALGORITHM:
- Create pairsArray with nested arrays (which are pairs of ints)
- Calculate the difference between numbers in each pair
- Sort pairArray ascending in terms of difference
- return the first pair
*/

function findPairs(arr) {
  let pairs = [];

  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      pairs.push([arr[i], arr[j]]);
    }
  }

  return pairs;
}

function closestNumbers(inputArray) {
  let pairsArray = findPairs(inputArray);

  pairsArray.forEach(pair => pair['diff'] = Math.abs(pair[1] - pair[0]));
  
  pairsArray.sort((a, b) => a['diff'] - b['diff']);

  return pairsArray[0];
}

const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(closestNumbers([5, 25, 15, 11, 20]), [15, 11]));
p(eq(closestNumbers([19, 25, 32, 4, 27, 16]), [25, 27]));
p(eq(closestNumbers([12, 22, 7, 17]), [12, 7]));