/*
  Write a function that takes a string argument and returns true if all of the alphabetic characters inside the string are uppercase; 
  false otherwise. Ignore characters that are not alphabetic.
*/

function isUppercase2(inputString) {
  const UPPER_CASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let sanitizedString = inputString.replace(/[^a-z]/gi, "");

  for (let char of sanitizedString) {
    if (!UPPER_CASE.includes(char)) {
      return false;
    }
  }

  return true;
}

function isUppercase(inputString) { // alternative shorter version
  let sanitizedString = inputString.replace(/[^a-z]/gi, "");

  return sanitizedString === sanitizedString.toUpperCase();
}

// Test cases
console.log(isUppercase('t') === false);               // false
console.log(isUppercase('T') === true);               // true
console.log(isUppercase('Four Score') === false);      // false
console.log(isUppercase('FOUR SCORE') === true);      // true
console.log(isUppercase('4SCORE!') === true);         // true
console.log(isUppercase('') === true);                // true


