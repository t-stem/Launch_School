/*
Write a function that takes one argument, a positive integer, and returns the sum of its digits. 

Do this without using for, while, or do...while loops - instead, use a series of method calls to perform the sum.
*/

function sum(inputInteger) { // exercise solution
  return String(inputInteger)
  .split('')
  .map(digit => Number(digit))
  .reduce((sum, digit) => sum + digit, 0);
}

function digitsToArray(inputInteger) { // alternative solution using loops
  const BASE = 10;
  let digitsArray = [];
  let currentInteger = inputInteger;
  
  while (currentInteger > 0) {
    let currentDigit = currentInteger % BASE;
    digitsArray.push(currentDigit);

    currentInteger = (currentInteger - currentDigit) / BASE;
  }

  return digitsArray;
}


function sum2(inputInteger) {
  return digitsToArray(inputInteger).reduce((sum, currentDigit) => sum + currentDigit, 0)
}

console.log(sum(23) === 5);           // 5
console.log(sum(496) === 19);          // 19
console.log(sum(123456789) === 45);    // 45