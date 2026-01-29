/* 
Create a function that takes a nonempty string as an argument and returns an array consisting of a string and an integer. 

If we call the string argument s, the string component of the returned array t, and the integer component of the returned array k,
 then s, t, and k must be related to each other such that s === t * k. 
 
 The values of t and k should be the shortest possible substring and the largest possible repeat count that satisfies this equation.

You may assume that the string argument consists entirely of lowercase alphabetic letters.

PROBLEM
- Input: nonempty string
- Output: an array consisting of a string and an integer

- rephrase: return an array that constists of 1) the shortest substring that repeatedly occurs in the main string and 2) the number of times it repeasts


DATA STRUCTURES:
- {unique substring: number of reps
- [unique substrings]

ALGORITHM:
- Find substrings
- IF substring already exists in obj uniqueSubstrings
    increase reps by 1
- ELSE
    set reps to 1

- Go through substrings
- Check if substring * reps equals mainstring
*/

function getSubstringCounts(inputString) {
  let subStringCounts = {}
  
  for (let i = 0; i < inputString.length; i += 1) {
    for (let j = i + 1; j <= inputString.length; j += 1) {
      let substring = inputString.slice(i, j);
      if (Object.keys(subStringCounts).includes(substring)) {
        subStringCounts[substring] += 1;
      } else {
        subStringCounts[substring] = 1;
      }
    }
  }

  return subStringCounts;
}

function repeatedSubstring(mainString) {
  let uniqueSubstringTally = getSubstringCounts(mainString);

  let sortedSubstrings = Object.entries(uniqueSubstringTally).sort((a, b) => a[0].length - b[0].length);

  for (let substr of sortedSubstrings) {
    if (substr[0].repeat(substr[1]) === mainString) return substr;
  }
}


const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(repeatedSubstring('xyzxyzxyz'), ['xyz', 3]));
p(eq(repeatedSubstring('xyxy'), ['xy', 2]));
p(eq(repeatedSubstring('xyz'), ['xyz', 1]));
p(eq(repeatedSubstring('aaaaaaaa'), ['a', 8]));
p(eq(repeatedSubstring('superduper'), ['superduper', 1]));