/*
Write a function that computes the difference between the square of the sum of the first count positive integers 
and the sum of the squares of the first count positive integers.
*/


function sumSquareDifference2(inputInteger) {
  let firstCountInts = [];

  for (let i = 1; i <= inputInteger; i += 1) {
    firstCountInts.push(i);
  }

  let squareOfSum = firstCountInts.reduce((sum, currentInt) => sum + currentInt, 0) ** 2;
  let sumOfSquares = firstCountInts.reduce((sum, currentInt) => sum + currentInt ** 2, 0);

  return squareOfSum - sumOfSquares;
}

function sumSquareDifference(inputInteger) { // alternative solution
  let sum = 0;
  let sumOfSquares = 0;

  for (let i = 1; i <= inputInteger; i += 1) {
    sum += i;
    sumOfSquares += i ** 2;
  }

  return sum ** 2 - sumOfSquares;
}


console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
