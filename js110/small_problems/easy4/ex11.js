/* In the previous two exercises, you developed functions that convert simple numeric strings to signed integers. 

In this exercise and the next, you're going to reverse those functions.

Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, and so on) to 
the string representation of that integer.

You may not use any of the standard conversion functions available in JavaScript, such as String(), 
Number.prototype.toString, or an expression such as '' + number. Your function should do this the old-fashioned way and construct the string by analyzing and manipulating the number.
*/

function integerToString (inputInteger) {
  let currentDigit;
  let remainingInteger = inputInteger;
  let numberString = '';
  
   while (remainingInteger > 10) {

    currentDigit = remainingInteger % 10;

    remainingInteger = (remainingInteger - currentDigit) / 10;

    numberString = currentDigit + numberString; // note: this line relies on implicit conversion of + operator if one of the operands is a string
  }

  return remainingInteger + numberString;
  
}


console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"