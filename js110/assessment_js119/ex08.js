/*
Create a function that takes a non-empty string as an argument. 
The string consists entirely of lowercase alphabetic characters. 
The function should return the length of the longest vowel substring. 
The vowels of interest are "a", "e", "i", "o", and "u".

PROBLEM:
- input: non-empty string as an argument
  * string consists entirely of lowercase alphabetic characters.
- output: length of the longest vowel substring

- explicit rules:
  * vowels of interest are "a", "e", "i", "o", and "u".

EXAMPLES:

DATA STRUCTURES:
- Arrays [all vowelSubstrings]
- Object {vowelSubstring: length}

ALGORITHM
- Loop through chars of inputString
  SET substring = empty string
  IF currentChar is a vowel
    Append currentChar to substring
  ELSE IF substring is not empty
    Append substring to vowelSubstrings array
  
- Transform vowelSubstrings array to vowelSubstringsLength array

- Sort vowelSubstringsArray descending

- Return vowelSubstringsArray[0]
*/

function getVowelSubstrings(str) {
  const vowels = 'aeiou';
  let vowelSubtringsArray = [];
  let substring = '';

  for (let currentChar of str) {
    
    if (vowels.includes(currentChar)) {
      substring += currentChar;
    } else if (substring.length > 0) {
      vowelSubtringsArray.push(substring);
      substring = '';
    }
  }

  if (substring.length > 0) {
    vowelSubtringsArray.push(substring);
  }

  return vowelSubtringsArray;
}

function longestVowelSubstring(inputString) {
  let vowelSubstrings = getVowelSubstrings(inputString);

  if (vowelSubstrings.length === 0) return 0;

  let substringLengths = vowelSubstrings.map(substring => substring.length);

  substringLengths.sort((a, b) => b - a);

  return substringLengths[0];
}


const p = console.log;
p(longestVowelSubstring('cwm') === 0);
p(longestVowelSubstring('many') === 1);
p(longestVowelSubstring('launchschoolstudents') === 2);
p(longestVowelSubstring('eau') === 3);
p(longestVowelSubstring('beauteous') === 3);
p(longestVowelSubstring('sequoia') === 4);
p(longestVowelSubstring('miaoued') === 5);
