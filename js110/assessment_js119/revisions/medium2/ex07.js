/*
Bubble Sort is one of the simplest sorting algorithms available. 
It is not an efficient algorithm, so developers rarely use it in real code. 

However, it is an excellent exercise for student developers. 

In this exercise, you will write a function that sorts an array using the bubble sort algorithm.

A bubble sort works by making multiple passes (iterations) through an array. 

On each pass, the two values of each pair of consecutive elements are compared. 

If the first value is greater than the second, the two elements are swapped. 

This process is repeated until a complete pass is made without performing any swaps. 

At that point, the array is completely sorted.

Write a function that takes an array as an argument and sorts that array using the bubble sort algorithm described above. 
The sorting should be done "in-place" — that is, the function should mutate the array. 
You may assume that the array contains at least two elements.

PROBLEM:
- INPUT: array 
- OUTPUT: sorts that array using the bubble sort algorithm described above

Explicit rules:
- The sorting should be done "in-place" — that is, the function should mutate the array. 
- You may assume that the array contains at least two elements.

EXAMPLES:
- 

DATA STRUTURES:
- [inputs]

ALGORITHM

Sorting pass
  SET sortingCount = 0
  Loop through array, starting from 0 ending at lastIndex - 1;
  - IF check(curr, next) = true
    * Swap
    * Increase sortingCount by 1
  RETURN sortingCount;

Check(a, b)
  IF a and b are strings, take the first char and reassign variable
  RETURN a > b

Swap(array, index1, index2) 
  SET memory = element at index 1
  SET element at index1 = element at index2
  SET element at index2 = memory

WHILE sortingCount > 0
  Sorting pass
*/


function needSort(a, b) {
  if (typeof a === 'string' && typeof b === 'string') {
    a = a[0];
    b = b[0];
  }
  
  return a > b;
}

function swap(arr, index1, index2) {
  let memory = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = memory;
}

function sortingPass(arr) {
  let sortingCount = 0;

  for (let i = 0; i < arr.length - 1; i += 1) {
    if (needSort(arr[i], arr[i + 1])) { 
      swap(arr, i, i + 1);
      sortingCount += 1;
    }
  }

  return sortingCount;
}

function bubbleSort(arr) {
  let opsCount;
  do {
    opsCount = sortingPass(arr);
  }
  while (opsCount > 0)
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]