/* 
Create a function that takes an array of strings as an argument and finds the longest common prefix string amongst them.

If there is no common prefix, return an empty string "".

You can assume that all given inputs are in lowercase letters a-z.

PROBLEM:
- Inputs: array of strings
- Outputs: longest common prefix string among strings
  * If there is no common prefix, return an empty string "".

Explicit rules:
- You can assume that all given inputs are in lowercase letters a-z.

DATA STRUCTURES:
- [prefixes]
- {}

ALGORITHM:
- SET longestPrefix = empty string
- Loop through strings in array while prefixes are equal
  - IF prefixes are equal
    SET longestPrefix = currentPrefix
  - ELSE 
    RETURN longestPrefix


*/

function longestCommonPrefix(stringsArray) {
  if (stringsArray.length === 0) return '';
  
  let longestPrefix = ''
  let arraySortedLength = stringsArray.sort((a, b) => a.length - b.length);
  let shortestStringLength = arraySortedLength[0].length;

  for (let i = 1; i <= shortestStringLength; i += 1) {
    let prefixesArray = stringsArray.map(string => string.slice(0, i));
         
    for (let j = 1; j < prefixesArray.length; j+= 1) {
      if (prefixesArray[j] !== prefixesArray[j - 1]) {
        return longestPrefix;
      }
    }
    
    longestPrefix = prefixesArray[prefixesArray.length - 1];
  }

  return longestPrefix;
  
}

const p = console.log;

p(longestCommonPrefix(["flower", "flow", "flight"]) === "fl");
p(longestCommonPrefix(["dog", "racecar", "car"]) === "");
p(longestCommonPrefix(["interstellar", "internet", "internal"]) === "inter");
p(longestCommonPrefix(["apple", "apricot", "application"]) === "ap");
p(longestCommonPrefix(["prefix"]) === "prefix");
p(longestCommonPrefix([]) === "");
p(longestCommonPrefix(["", "b"]) === "");
p(longestCommonPrefix(["a", "a", "a"]) === "a");
