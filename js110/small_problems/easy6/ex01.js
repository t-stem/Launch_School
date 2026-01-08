/*
Write a function that takes a string, doubles every character in the string, and returns the result as a new string.
*/

function repeater(inputString) {
  let newString = '';

  for (let char of inputString) {
    newString += char.repeat(2);
  }

  return newString;
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""