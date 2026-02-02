/*
Write a function that rotates the last count digits of a number. 

To perform the rotation, move the first of the digits that you want to rotate to the end 
and shift the remaining digits to the left.

PROBLEM:
- Inputs: rotates the last count digits of a number

- Explicit rules:
To perform the rotation, move the first of the digits that you want to rotate to the end 
and shift the remaining digits to the left.

EXAMPLES

DATA STRUCTURES
- [non-rotating digits]
- [rotating digits]

ALGORITHM:
SET intStr = int converted to string
SET rotatingDigits = [last count digits of intStr]
SET nonRotatingDigits = 'remaining digits of intStr'

Rotate rotatingDigits
- Remove the first digit
- Append first digit at the end
- Shift everything left

Convert rotatingDigits to string
SET newStr = Concat nonRotating + rotating

RETURN number version of newStr

*/

function rotateRightmostDigits(inputInt, count) {
  let intStr = String(inputInt);
  let length = intStr.length;

  let rotatingDigits = intStr.slice(length - count).split(''); // arr
  let nonRotatingDigits = intStr.slice(0, length - count); // str

  let lastDigit = rotatingDigits.shift();
  rotatingDigits.push(lastDigit);
  rotatingDigits  = rotatingDigits.join('');

  return Number(nonRotatingDigits + rotatingDigits);
}


rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 7352 19
rotateRightmostDigits(735291, 3);      // 735 912
rotateRightmostDigits(735291, 4);      // 73 2915
rotateRightmostDigits(735291, 5);      // 7 52913
rotateRightmostDigits(735291, 6);      // 352917