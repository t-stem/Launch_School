/*
A featured number (something unique to this exercise) is an odd number that is a multiple of 7, 
with all of its digits occurring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 
97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument and returns the next featured number greater than the integer. 

Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201.
*/

function featured(inputNumber) { 
  let currentNumber = inputNumber + 1;
  
  while (!isFeatured(currentNumber)) {
    if (currentNumber > 9876543201) return "There is no possible number that fulfills those requirements.";
    currentNumber += 1;
  }

  return currentNumber;
}

function isFeatured(thisNumber) {
  if (thisNumber % 2 === 0) return false;

  if (thisNumber % 7 !== 0) return false;

  if (duplicateDigits(thisNumber)) return false;

  return true;
}

/* Test cases
console.log(isFeatured(49)); // true
console.log(isFeatured(97)); // false
console.log(isFeatured(98)); // false
console.log(isFeatured(133)); // false
console.log(isFeatured(9876543201)); // true
*/

function duplicateDigits(number) {
  const digitCounts = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0
  }

  let currentNumber = number;
  let BASE = 10;

  while (currentNumber > 0) {
    let currentDigit = currentNumber % BASE;
    // let digitString = String(currentDigit); // this line is not needed since number keys are automatically coerced into strings

    if (digitCounts[currentDigit] > 0) return true; // changed to currentDigit

    digitCounts[currentDigit] += 1; // changed to currentDigit
    currentNumber = (currentNumber - currentDigit) / BASE; 
  }
  return false;
}

// console.log(duplicateDigits(1032))

// Test cases
console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."
