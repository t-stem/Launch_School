/*

Write a function that takes a string argument and returns a list of substrings of that string. 

Each substring should begin with the first letter of the word, and the list should be ordered from shortest to longest.

*/

function leadingSubstrings1(inputString) {
  let substrings = [];
  let currentString = '';

  for (i = 0; i < inputString.length; i += 1) {
    currentString = currentString + inputString[i];
    substrings.push(currentString);
  }

  return substrings;
}

function leadingSubstrings(inputString) {
  let substrings = [];
  
  for (let i = 1; i <= inputString.length; i += 1) {
    substrings.push(inputString.slice(0, i));
  }

  return substrings;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]