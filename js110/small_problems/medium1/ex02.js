/*
Write a function that rotates the last count digits of a number. 

To perform the rotation, move the first of the digits that you want to rotate to the end 
and shift the remaining digits to the left.
*/

function rotateRightmostDigits(inputNumber, digitCount) {
  let numberToString = String(inputNumber);
  let stringLength = numberToString.length;
  let rightmostDigits = numberToString.slice(stringLength - digitCount);
  let rotatedDigits = rightmostDigits.slice(1).concat(rightmostDigits[0]);
  let newString = numberToString.replace(rightmostDigits, rotatedDigits);

  return Number(newString);
}


// test cases
console.log(rotateRightmostDigits(735291, 1));      // 73529 1
console.log(rotateRightmostDigits(735291, 2));      // 7352 19
console.log(rotateRightmostDigits(735291, 3));      // 735 912
console.log(rotateRightmostDigits(735291, 4));      // 73 2915
console.log(rotateRightmostDigits(735291, 5));      // 7 52913
console.log(rotateRightmostDigits(735291, 6));      // 352917