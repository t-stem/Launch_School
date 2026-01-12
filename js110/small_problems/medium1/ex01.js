/* 
Write a function that rotates an array by moving the first element to the end of the array. 

Do not modify the original array.

If the input is not an array, return undefined.
If the input is an empty array, return an empty array.
Review the test cases below, then implement the solution accordingly.

*/

function rotateArray2(input) {
  if (!Array.isArray(input)) {
    return undefined;
  } else if (input.length === 0) {
    return [];
  } else {
    let newArray = input.slice();
    newArray.push(newArray.shift());
    return newArray;
  }
}

function rotateArray(input) {
  if (!Array.isArray(input)) {
    return undefined;
  }

  if (input.length === 0) {
    return [];
  }

  return input.slice(1).concat(input[0]);
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]