/*
In the previous exercise, you developed a function that converts non-negative numbers to strings. 
In this exercise, you're going to extend that function by adding the ability to represent negative numbers as well.

Write a function that takes an integer and converts it to a string representation.

You may not use any of the standard conversion functions available in JavaScript, such as String() and Number.prototype.toString(). You may, however, use integerToString() from the previous exercise.

You might also want to check the Math.sign() function.
*/

function integerToString (inputInteger) {
  const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; // uses property of arrays that index numbers are of number type
  let numberString = '';

  if (inputInteger === 0) { // note: handled case for zero outside the loop
    return '0';
  }

  let remainingInteger = inputInteger;
  
  do {
    let currentDigit = remainingInteger % 10;
    remainingInteger = (remainingInteger - currentDigit) / 10;

    numberString = DIGITS[currentDigit] + numberString;
  }
  while(remainingInteger > 0) // note: improved by changing to shorter version that stops when remainingInteger > 0 rather than remainingInteger >= 10 in ex11, which was unnecessary

  return numberString;
}


function signedIntegerToString (signedInteger) {
  if (signedInteger === 0) {
    return '0';
  }
  
  const sign = Math.sign(signedInteger);
  let unsignedInteger = sign === 1 ? signedInteger : signedInteger * sign;
  
  let numberString = integerToString(unsignedInteger);
  
  return sign === 1 ? '+' + numberString :  '-' + numberString; // note: used short return statement using ternary operator
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");