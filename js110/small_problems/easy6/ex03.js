/* 
Write a function that takes a positive integer as an argument and returns that number with its digits reversed.
*/

const BASE = 10;

function moduloBASE(inputNumber) {
  return inputNumber % BASE;

}

//console.log(moduloTen(12345))

function magnitude(inputNumber) {
  let currentNumber = inputNumber;
  let exponent = 0;
  
  while (moduloBASE(currentNumber) !== currentNumber) {
    let currentDigit = moduloBASE(currentNumber);
    currentNumber = (currentNumber - currentDigit) / BASE;
    exponent += 1;
  }

  return exponent;
}

// console.log(powerOfBASE(12345));


function reverseNumber(inputNumber) {
  let currentNumber = inputNumber;
  let reversedNumber = 0;

  for (let i = magnitude(inputNumber); currentNumber > 0; i -= 1) {
    let currentDigit = moduloBASE(currentNumber);

    reversedNumber += currentDigit * (BASE ** i);

    currentNumber = (currentNumber - currentDigit) / BASE;
  }

  return reversedNumber;
}


console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1