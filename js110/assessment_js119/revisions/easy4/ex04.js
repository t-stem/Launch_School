/*
Write a function that returns true if its integer argument is palindromic, or false otherwise. 
A palindromic number reads the same forwards and backwards.

PROBLEM:
- Input: integer argument
- Output: returns true if its integer argument is palindromic, or false otherwise. 

EXAMPLES:

DATA STRUCTURES:
- [digits]
- 'digits'

ALGORITHM:
- Convert number to string
- Split string into digits
- Get reverse of string
- Check if original string equals reverse

*/

function isPalindromicNumber(num) {
  let numStr = String(num);
  let revNum = numStr
    .split('')
    .reverse()
    .join('');
  
  return numStr === revNum;
}


console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true