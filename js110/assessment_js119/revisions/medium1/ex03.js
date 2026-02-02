/*
Take the number 735291 and rotate it by one digit to the left, getting 352917.

Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. 

Keep the first two digits fixed in place and rotate again to get 321759. 

Keep the first three digits fixed in place and rotate again to get 321597. 

Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. 

The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument and returns the maximum rotation of that integer. 

You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

PROBLEM:
- Input: int
- Output: the maximum rotation of that integer

Explicit rules:
- 

EXAMPLES

DATA STRUCTURES
- [rotating digits]
- [non-rotating digits]

ALGORITHM
rotate(int, count)
SET strInt = int to string
SET rotating = [last count digits]
SET nonRotating = remaining digits

Remove first digit from rotating
Append removedDigit to rotating
Convert rotating to string

SET newStrInt = concat rotating + nonRotating

RETURN newStrInt to number

SET i = number of digits (length of int to string) 
SET currInt = inputInt

WHILE i > 0
  currInt = rotate(currInt)
  reduce i by one

RETURN currInt
*/

function rotate(strInt, count) {
  let length = strInt.length;

  let rotating = strInt.slice(length - count).split('');
  let nonRotating = strInt.slice(0, length - count);

  let removedDigit = rotating.shift();
  rotating.push(removedDigit);

  rotating = rotating.join('');

  return nonRotating + rotating;
}


function maxRotation(inputInt) {
  let currInt = String(inputInt);
  let length = currInt.length;

  for (let i = length; i > 0; i -= 1) {
    currInt = rotate(currInt, i);
  }

  return Number(currInt);
}


console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845
