/*
Write a function that takes a string and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither
You may assume that the string will always contain at least one character.

PROBLEM:
- input: a string
- output: an object containing the following three properties (ALL AS STRINGS WITH TWO DECIMALS):
    * the percentage of characters in the string that are lowercase letters
    * the percentage of characters that are uppercase letters
    * the percentage of characters that are neither

Explicit rules:
- You may assume that the string will always contain at least one character.

Implicit rules:
- Spaces count as a char
- so do nums and punctuation

EXAMPLES

DATA STRUCTURES:
- {ouputs}
- [uppercase chars in string]
- [lowercase chars in string]


ALGORITHM:
- let upper = string of lowercase alphabetic chars
- let lower = string of lowercase chars
- SET upperChars = []
- SET lowerChars = []
- SET percentages = {}


Loop through chars of string
  IF currentChar is included in upper
    append to upperChars
  IF currentChar is included in lowerCase
    append to lowerChars

SET upperCount = length of upperChars
SET lowerCount = length of lowerChars
SET totalCount = length of inputStr
SET neitherCount = totalCount - upperCount - lowerCount

Calculate percentages
Format percentages as strings with 2 decimals

return percentages 

*/

function letterPercentages2(str) {
  const LOWER = 'abcdefghijklmnopqrstuvwxyz';
  const UPPER = LOWER.toUpperCase();
  let upperChars = [];
  let lowerChars = [];
  let percentages = {}

  for (let char of str) {
    if (LOWER.includes(char)) {
      lowerChars.push(char)
    }

    if (UPPER.includes(char)) {
      upperChars.push(char);
    }
  }

  let totalCount = str.length;
  let upperPercentage = upperChars.length / totalCount * 100;
  let lowerPercentage = lowerChars.length / totalCount * 100;
  let neitherPercentage = (totalCount - upperChars.length - lowerChars.length) / totalCount * 100;

  percentages['lowercase'] = lowerPercentage.toFixed(2);
  percentages['uppercase'] = upperPercentage.toFixed(2);
  percentages['neither'] = neitherPercentage.toFixed(2);

  console.log(percentages);
  return percentages;

}

function toPercentage(int, total) {
  return (int / total * 100).toFixed(2);
}

function letterPercentages(str) {
  const LOWER = 'abcdefghijklmnopqrstuvwxyz';
  const UPPER = LOWER.toUpperCase();
  
  let upperCount = str.split('').filter(char => UPPER.includes(char)).length;
  let lowerCount = str.split('').filter(char => LOWER.includes(char)).length;
  let totalCount = str.length;
  let neitherCount = totalCount - upperCount - lowerCount;

  let obj =  {
    lowercase: toPercentage(lowerCount, totalCount),
    uppercase: toPercentage(upperCount, totalCount),
    neither: toPercentage(neitherCount, totalCount)
  }

  console.log(obj);
  return obj
}

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }