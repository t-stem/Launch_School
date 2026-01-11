/*
Write a function that takes a string and returns an object containing three properties: 
one representing the number of characters in the string that are lowercase letters, 
one representing the number of characters that are uppercase letters, and 
one representing the number of characters that are neither.

*/

function letterCaseCount2(inputString) {
  let neither = inputString.match(/[^a-z]/gi) || [];
  let lowerCase = inputString.match(/[a-z]/g) || [];
  let upperCase = inputString.match(/[A-Z]/g) || [];

  return {lowercase: lowerCase.length, uppercase: upperCase.length, neither: neither.length};
}

function letterCaseCount1(inputString) {
  let upperCase = inputString.split("").filter(char => (char >= 'A' && char <= 'Z')).length;
  let lowerCase = inputString.split("").filter(char => (char >= 'a' && char <= 'z')).length;
  let neither = inputString.length - upperCase - lowerCase;

  return {lowercase: lowerCase, uppercase: upperCase, neither: neither};
}

function letterCaseCount(inputString) {
  let counts = {lowercase: 0, uppercase: 0, neither:0};

  for (let char of inputString) {
    if (char >= 'A' && char <= 'Z') {
      counts.uppercase += 1;
    } else if (char >= 'a' && char <= 'z') {
      counts.lowercase += 1;
    } else {
      counts.neither += 1;
    }
  }
  return counts;
}
// Test cases
console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }