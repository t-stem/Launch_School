/*
Write a function that takes a string and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither

You may assume that the string will always contain at least one character.
*/

function percentageString(part, total) {
  return String((part / total * 100).toFixed(2));
}

function letterPercentages(inputString) {
  let length = inputString.length;

  let neitherCount = (inputString.match(/[^a-z]/gi) || []) // IMPROVEMENT: added || since .match() returns null if no matches are found, which would cause a type error when getting .length
    .length;

  let abcArray = inputString.replace(/[^a-z]/gi, '').split('');

  let lowerCount = abcArray
    .filter(char => char === char.toLowerCase())
    .length;

  let upperCount = abcArray
    .filter(char => char === char.toUpperCase())
    .length;

  return {
    lowercase: percentageString(lowerCount, length),
    uppercase: percentageString(upperCount, length),
    neither: percentageString(neitherCount, length)
  };
}

// Test cases
console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

