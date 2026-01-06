/* 
Write a function that takes one argument, a positive integer, and returns a list of the digits in the number.
*/

function digitList2(inputNumber) {
  const BASE = 10;
  let outputArray = [];
  let currentNumber = inputNumber;
  
  do {
    let currentDigit = currentNumber % BASE;
    
    outputArray.unshift(currentDigit);
    
    currentNumber = (currentNumber - currentDigit) / BASE;
  }
  while (currentNumber > 0);

  return outputArray;
}

function digitList(inputNumber) { // alternative solution
  let numberToString = String(inputNumber);

  return [...numberToString];

}


console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]