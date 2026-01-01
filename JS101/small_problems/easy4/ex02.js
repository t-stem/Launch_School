/* 
Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise. A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter.
*/

function isPalindrome(inputString) {
  let stringLength = inputString.length;
  let loopEnd = Math.floor(stringLength / 2);
  let stringToArray = [...inputString]; // IMPROVEMENT: this line is not needed since strings are already indexable
  
  for (let i = 0; i < loopEnd; i += 1) { // CORRECTION: added let declaration for i variable
    if(stringToArray[i] !== stringToArray[stringLength - 1 - i]) {
      return false;
    }
  }
  return true;
}


console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true