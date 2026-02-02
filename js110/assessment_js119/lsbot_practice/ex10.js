/*
Create a function that takes an array nums and a non-negative integer k. The function should rotate the array to the right by k steps and return the new rotated array.

Rotating an array to the right by 1 step means the last element becomes the first element, and all other elements shift one position to the right.

PROBLEM:
- input: array nums, non-negative integer k
- outputs: new rotated array

Explicit rules: Rotating an array to the right by 1 step means the last element becomes the first element, and all other elements shift one position to the right.


EXAMPLES:
- 

DATA STRUCTURES
- [rotated elements from right]
- [remaining elements]

ALGORITHM
- Remove k elements from the right
- Append to the front of the remaining string 

- 

*/

function rotate(arr, k) {
  let newArr = arr.slice();

  if (newArr.length === 0) return newArr;
  
  for (let i = 0; i < k; i += 1) {
    let removed = newArr.pop();
    newArr.unshift(removed);
  }
  
  return newArr;
}

const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(rotate([1, 2, 3, 4, 5, 6, 7], 3), [5, 6, 7, 1, 2, 3, 4]));
p(eq(rotate([-1, -100, 3, 99], 2), [3, 99, -1, -100]));
p(eq(rotate([1, 2, 3], 0), [1, 2, 3]));
p(eq(rotate([1, 2, 3], 3), [1, 2, 3]));
p(eq(rotate([1, 2], 5), [2, 1])); // k can be larger than the array length
p(eq(rotate([], 5), []));