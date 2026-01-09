/*
Write a function that takes an Array as an argument and reverses its elements in place. That is, mutate the Array passed into this method. The return value should be the same Array object.

You may not use Array.prototype.reverse().
*/

function reverse(inputArray) {
  const LENGTH = inputArray.length;
  const LAST_INDEX = LENGTH - 1;
  const BOUNDARY = LENGTH % 2 === 0 ? LENGTH / 2 : Math.ceil(LENGTH / 2);

  for (let i = 0; i < BOUNDARY; i += 1) {
    let firstValue = inputArray[i];
    let lastValue = inputArray[LAST_INDEX - i];
    inputArray[i] = lastValue;
    inputArray[LAST_INDEX - i] = firstValue;
  }

  return inputArray;
}

/*
PEDAC

- compute the midpoint in the array 
  * length 6, last index 5, midpoint index 2
  * length 5, last index 4, midpoint index 2
- loop first half of the array
  - store the first value
  - mutate the first value with the last value
  - mutate the last value with the stored value
*/

// Test cases
let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true