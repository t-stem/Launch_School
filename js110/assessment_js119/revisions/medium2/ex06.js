/*
Write a function that computes the difference between the square of the sum of the first count positive integers and the sum of the squares of the first count positive integers.

PROBLEM:
- Input: positive num
- Output: difference between
  * the square of the sum of the first count positive integers and
  * the sum of the squares of the first count positive integers

EXAMPLES:

DATA STRUCTURES
[count positive ints]

ALGORITHM
SET countInts = posIntsArray(count) 
SET squredSum 
  * sum ints in countInts
  * square result
SET sumSquares
  * SET squares = new array with squares ints in countInts
  * sum values in squares

RETURN squaredSum - sumSquares

*/
function posIntsArr(count) {
  let arr = [];
  
  for (let i = 1; i <= count; i += 1) {
    arr.push(i);
  }

  return arr;
}

function square(num) {
  return num ** 2;
}

function sumSquareDifference(num) {
  let countInts = posIntsArr(num);

  let squaredSum = square(countInts.reduce((sum, num) => num + sum, 0));
  let sumSquares = countInts.map(int => square(int)).reduce((sum, num) => sum + num, 0);

  return squaredSum - sumSquares;
}


console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640 --- > (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10) ** 2
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
