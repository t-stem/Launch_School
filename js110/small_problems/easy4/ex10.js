/* In the previous exercise, you developed a function that converts simple numeric strings to integers. 
In this exercise, you're going to extend that function to work with signed numbers.

Write a function that takes a string of digits and returns the appropriate number as an integer. 

The string may have a leading + or - sign; if the first character is a +, 
your function should return a positive number; if it is a -, your function should return a negative number. 

If there is no sign, return a positive number.

You may assume the string will always contain a valid number.

You may not use any of the standard conversion methods available in JavaScript, 
such as parseInt() and Number(). 

You may, however, use the stringToInteger() function from the previous lesson.

*/

let numbersLookup = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 0: 0 }

function stringToInteger(inputString) {
  let stringLength = inputString.length;
  let lastDigitIndex = stringLength - 1;

  let outputNumber = 0;

  for (let i = 0; i < stringLength; i += 1) {
    let currentDigitIndex = lastDigitIndex - i;
    let currentDigit = inputString[currentDigitIndex];
    let digitValue = 10 ** i;

    outputNumber += digitValue * numbersLookup[currentDigit];
  }

  return outputNumber;
}

function stringToSignedInteger2 (inputString) {
  let firstChar = inputString[0];

  if (firstChar === '-') {

    return stringToInteger(inputString.slice(1)) * -1;
  } else if (firstChar === '+') {
    
    return stringToInteger(inputString.slice(1));
  } else {

    return stringToInteger(inputString);
  }
}

function stringToSignedInteger (inputString) { // IMPROVEMENT: added shorter alternative with fewer repetitions
  let firstChar = inputString[0]; 
  let sign = 1;
  
  if (firstChar === "-") {
    sign = -1;
    inputString = inputString.slice(1);
  } else if (firstChar === '+') {
    inputString = inputString.slice(1);
  }
  return sign * stringToInteger(inputString);
}


console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true