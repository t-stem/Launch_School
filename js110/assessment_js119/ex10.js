/*
Create a function that takes a string of digits as an argument and returns the number of even-numbered 
substrings that can be formed. 

For example, in the case of '1432', the even-numbered substrings are '14', '1432', '4', '432', '32', and '2', for a total of 6 substrings.

If a substring occurs more than once, you should count each occurrence as a separate substring.

PROBLEM:
- Inputs: a string of digits
- the number of even-numbered substrings that can be formed

- Explicit rules:
  * If a substring occurs more than once, you should count each occurrence as a separate substring.

EXAMPLES

DATA STRUCTURES:
- array of substrings
- filtered array of even substrings

ALGORITHM
- put all substrings in an array

- filter the array for even substrings

- return length of filtered array
*/


function findSubstrings (str) {
  let subStrings = [];
  
  for (let i = 0; i < str.length; i += 1) {
    let substring = '';
    for (let j = i; j < str.length; j += 1) {
      substring += str[j];
      subStrings.push(substring);
    }
  }

  return subStrings;
}

function isEven(intString) {
  let num = Number(intString);

  return num % 2 === 0;
}


function evenSubstrings(inputString) {
  let substrings = findSubstrings(inputString);

  let evenStrings = substrings.filter(substring => isEven(substring));

  return evenStrings.length;
}

const p = console.log;
p(evenSubstrings('1432') === 6);
p(evenSubstrings('3145926') === 16);
p(evenSubstrings('2718281') === 16);
p(evenSubstrings('13579') === 0);
p(evenSubstrings('143232') === 12);