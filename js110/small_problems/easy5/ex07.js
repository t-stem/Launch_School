/*

Write a function that takes two array arguments, each containing a list of numbers, 
and returns a new array that contains the product of each pair of numbers from the arguments that have the same index. 

You may assume that the arguments contain the same number of elements.

*/

function multiplyList2(array1, array2) {
  let newArray = [];
  
  for (let i = 0; i < array1.length; i += 1) {
    newArray.push(array1[i] * array2[i]);
  }

  return newArray;
}

function multiplyList(array1, array2) { // alternative solution

  return array1.map((element, index) => element * array2[index]);
}
console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]