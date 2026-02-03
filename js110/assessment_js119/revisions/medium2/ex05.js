/*
A featured number (something unique to this exercise) is an odd number that is a multiple of 7, 
with all of its digits occurring exactly once each. 

For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), 
and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument and returns 
Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201.

PROBLEM:
- INPUT: integer
- OUTPUT: the next featured number greater than the integer. 

Explicit rules:
- featured number = an odd number that is a multiple of 7, 

DATA STRUCTURES
- [available digits]
- {digit: count}

ALGORITHM:
- SET currNum = inputNum + 1;
- WHILE currNum is not featured
  currNum + 1
- RETURN currNum

isFeatured(num)
IF num is not multiple of 7 
  RETURN false
IF num is even
  RETURN false
IF num has duplicateDigits
  RETURN false

hasDuplicateDigits(num)
Convert num to string
Loop through digits
  IF currDigit is included in availableDigits
    remove currDigits from availableDigits
  ELSE
    RETURN true
RETURN false

*/

function isMult7(num) {
  return num % 7 === 0;
}

function isOdd(num) {
  return num % 2 === 1;
}

function hasDuplicateDigits(num) {
  let numStr = String(num);
  let availableDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  for (let i = 0; i < numStr.length; i += 1) {
    let index = availableDigits.indexOf(numStr[i]);
    if (index > -1) {
      availableDigits.splice(index, 1);
    } else {
      return true;
    }
  }

  return false;
}
function isFeatured(num) {
  if (!isMult7(num)) return false;

  if (!isOdd(num)) return false;

  if (hasDuplicateDigits(num)) return false;

  return true;
}

function featured(num) {
  if (num >= 9876543201) return "There is no possible number that fulfills those requirements.";
  
  let currNum = num + 1;

  while (!isFeatured(currNum)) {
    currNum += 1;
  }

  return currNum;
}

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