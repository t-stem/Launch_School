/*

Given the following data structure, return a new array with the same structure, but with the values in each subarray ordered
 -- alphabetically or numerically as appropriate -- in ascending order.

*/

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

function sortNestedArray(inputArray) {
  return inputArray.map(subArray => {
    return Number.isNaN(Number(subArray[0])) ? subArray.slice().sort() : subArray.slice().sort((a, b) => a - b);
  });
}

console.log(sortNestedArray(arr));