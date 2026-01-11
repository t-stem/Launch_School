/*
  Write a function that takes a string argument and returns true if all of the alphabetic characters inside the string are uppercase; 
  false otherwise. Ignore characters that are not alphabetic.
*/

function isUppercase(inputString) {
  const UPPER_CASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let santizedString = inputString.replace(/[^a-z]/gi, "");

  for (let char of santizedString) {
    if (!UPPER_CASE.includes(char)) {
      return false;
    }
  }

  return true;
}

// Test cases
console.log(isUppercase('t') === false);               // false
console.log(isUppercase('T') === true);               // true
console.log(isUppercase('Four Score') === false);      // false
console.log(isUppercase('FOUR SCORE') === true);      // true
console.log(isUppercase('4SCORE!') === true);         // true
console.log(isUppercase('') === true);                // true


