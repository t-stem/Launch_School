/*
Given the following data structure, sort the array so that the sub-arrays are ordered based on the sum of the odd numbers that they contain.
*/

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

/*
Since 1 + 3 < 1 + 7 < 1 + 5 + 3, the sorted array should look like this:
*/

[ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]

function sumOfOdd(inputArray) {
  return inputArray.reduce((sum, number) => sum + (number % 2 === 1 ? number : 0), 0)
}

arr.sort((sub1, sub2) => sumOfOdd(sub1) - sumOfOdd(sub2));

console.log(arr);
