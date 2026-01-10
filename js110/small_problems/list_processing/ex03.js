/*
Write a function that takes two array arguments, each containing a list of numbers, 
and returns a new array containing the products of all combinations of number pairs that exist between the two arrays.

The returned array should be sorted in ascending numerical order.

You may assume that neither argument will be an empty array.
*/

function multiplyAllPairs(numbersArray1, numbersArray2) {
  let productsArray = [];
  numbersArray1.forEach(num1 => numbersArray2.forEach(num2 => productsArray.push(num1 * num2)));
  return productsArray.sort((a, b) => a - b);
} 

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]