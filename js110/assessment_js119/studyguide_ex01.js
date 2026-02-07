/*
 "reverse a list without using the built-in list.reverse method"

PROBLEM:
- input: array
- output: reversed array


DATA STRUCTURES
[list]

ALGORITHM
- Loop through the array starting at the end, incrementing by -1
- Remove the element from the list and push it to another list

- Loop through the second list, starting at the beginning
- Push elements back onto the original list

 */

function reverse(arr) {
  let tempArr = []

  for (let i = arr.length -1; i >= 0; i -= 1) {
    let removed = arr.pop()
    tempArr.push(removed);
  }

  while (tempArr.length > 0) {
    let removed = tempArr.shift();
    arr.push(removed);
  }

  return arr;
}

let array1 = [1, 2, 3, 4, 5]
console.log(array1);

