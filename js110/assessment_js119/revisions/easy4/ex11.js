/* In the previous two exercises, you developed functions that convert simple numeric strings to signed integers. 

In this exercise and the next, you're going to reverse those functions.

Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, and so on) to 
the string representation of that integer.

You may not use any of the standard conversion functions available in JavaScript, such as String(), 
Number.prototype.toString, or an expression such as '' + number. Your function should do this the old-fashioned way and construct the string by analyzing and manipulating the number.
revisit later

PROBLEM
- Inputs: non-negative int
- Output: string value of that int

- Explicit rules
- Your function should do this the old-fashioned way and construct the string by analyzing and manipulating the number.

EXAMPLES

DATA STRUCTURES
[numerical strings]

ALGORITHM
- SET intsArr = [numerical strings]
- SET digitsArr = []
- SET BASE = 10;
- WHILE remainder > 0
  * SET currDigit = remainder % BASE
  * Push currDigit to digitsArr
  * remainder = (remainder - currDigit) / BASE
- Reverse digitsArr
- Replace number digits in digitsArr with string digits
- Join digits together into intStr
- RETURN intStr

*/

function integerToString(inputInt) {
  let intStrings = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let digitsArr = [];
  const BASE = 10;
  let remainder = inputInt;

  do {
    let currDigit = remainder % BASE;
    digitsArr.push(currDigit);
    remainder = (remainder - currDigit) / BASE;
  }
  while (remainder > 0);

  digitsArr.reverse();
  digitsArr = digitsArr.map(digit => intStrings[digit]);

  return digitsArr.join('');
}

console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"