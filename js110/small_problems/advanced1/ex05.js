/*
Write a function that takes two sorted arrays as arguments and returns a new array that contains all the elements from both input arrays in sorted order.

You may not provide any solution that requires you to sort the result array. You must build the result array one element at a time in the proper order.

Your solution should not mutate the input arrays.
*/

function merge(array1, array2) {
  let outputArray = [];
  let length1 = array1.length;
  let length2 = array2.length;
  let index1 = 0;
  let index2 = 0;

  do {
    do {
      if (array1[index1] === undefined && array2[index2] === undefined) break;
      
      if (array2[index2] === undefined || array1[index1] < array2[index2]) {
        outputArray.push(array1[index1]);
        break;

      } else {
        outputArray.push(array2[index2]);

      }

      if (index2 === length2 - 1 && index1 === length1 - 1) { // case not accounted for in PEDAC
        outputArray.push(array1[index1]);
      }

      index2 += 1;
    }
    while (index2 < length2)
    
    index1 += 1;
  }
  while (index1 < length1);

  return outputArray;
}


console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]