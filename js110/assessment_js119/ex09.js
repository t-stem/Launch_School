/*
Create a function that takes two string arguments and returns the number of times that the second string 
occurs in the first string. 

Note that overlapping strings don't count: 'babab' contains 1 instance of 'bab', not 2.

You may assume that the second argument is never an empty string.


PROBLEM:
- Input: two string arguments
- Output: The number of times that the second string 
occurs in the first string

Explicit rules:
- Note that overlapping strings don't count: 'babab' contains 1 instance of 'bab', not 2.

- Questions: can either string be empty
  * You may assume that the second argument is never an empty string

EXAMPLES

DATA STRUCTURES
- arrays of objects
- objects {string, startIndex, endIndex}

ALGORITHM
1) 
Get all substrings from string1
  * add staring index 

Loop through substrings and check if startingIndex second string <= endingIndex first string
*/

function findSubstrings(str) {
  let substringsArray = [];

  for (let currentChar = 0; currentChar < str.length; currentChar += 1) {
    let substring = '';

    for (let nextChar = currentChar; nextChar < str.length; nextChar += 1) {
      substring += str[nextChar];
      let substringObj = {string: substring, startIndex: currentChar, endIndex: nextChar, valid: true};
      substringsArray.push(substringObj);
    }
  }

  return substringsArray;
}

function countSubstrings(string1, string2) {
  let substrings = findSubstrings(string1);
  let matchingSubstrings = [];

  substrings.forEach(substringObj => {
    if (substringObj['string'] === string2) {
      matchingSubstrings.push(substringObj);
    }
  });

  if (matchingSubstrings.length === 0) return 0;

  for (let i = 0; i < matchingSubstrings.length; i += 1) {
    for (let j = i + 1; j < matchingSubstrings.length; j += 1) {
      if (matchingSubstrings[i]['endIndex'] >= matchingSubstrings[j]['startIndex']) {
        matchingSubstrings[j]['valid'] = false;
      }
    }
  }

  let validSubstrings = matchingSubstrings.filter(substring => substring['valid'] === true);

  return validSubstrings.length;
}


const p = console.log;
p(countSubstrings('babab', 'bab') === 1);
p(countSubstrings('babab', 'ba') === 2);
p(countSubstrings('babab', 'b') === 3);
p(countSubstrings('babab', 'x') === 0);
p(countSubstrings('babab', 'x') === 0);
p(countSubstrings('', 'x') === 0);
p(countSubstrings('bbbaabbbbaab', 'baab') === 2);
p(countSubstrings('bbbaabbbbaab', 'bbaab') === 2);
p(countSubstrings('bbbaabbbbaabb', 'bbbaabb') === 1);