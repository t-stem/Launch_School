/*
Create a function that takes an array of integers as an argument. 
The function should determine the minimum integer value that 
can be appended to the array 
so the sum of all the elements equal 
the closest prime number 
that is greater than the current sum 
of the numbers. 

For example, the numbers in [1, 2, 3] sum to 6. 

The nearest prime number greater than 6 is 7. Thus, we can add 1 to the array to sum to 7.

Notes:

The array will always contain at least 2 integers.
All values in the array must be positive (> 0).
There may be multiple occurrences of the various numbers in the array.


PROBLEM:
- input: array of ints:
- output: minimum integer value that 
  * can be appended to the array so the sum of all the elements equal the closest prime number that is 
greater than the current sum of the numbers. 

DATA STRUCTURES:
- [inputArray]
- []


ALGORITHM
- Calc currentSum of inputArray

- currentNumber = currentSum + 1;
- WHILE currentNumber is not prime
  currentSum += 1;

- isPrime(number)
  IF number % 2 equals 0
    RETURN false
  
  SET factor = 3
  WHILE factor < number
    IF number % factor equals zero
      RETURN false
    factor += 2;

  RETURN true

RETURN currentSum - currentNumber
*/

function isPrime(number) {
  if (number === 2) return true

  if (number < 2) return false;

  if (number % 2 === 0) return false;

  let factor = 3;
  while (factor < number) {
    if (number % factor === 0) return false
    factor += 2;
  }

  return true;
}

function nearestPrimeSum(intsArr) {
  let currentSum = intsArr.reduce((sum, num) => sum + num, 0);
  let currentNumber = currentSum + 1;

  while (!isPrime(currentNumber)) {
    currentNumber += 1;
  }

  return currentNumber - currentSum;
}

const p = console.log;
p(nearestPrimeSum([1, 2, 3]) === 1);        // Nearest prime to 6 is 7
p(nearestPrimeSum([5, 2]) === 4);           // Nearest prime to 7 is 11
p(nearestPrimeSum([1, 1, 1]) === 2);        // Nearest prime to 3 is 5
p(nearestPrimeSum([2, 12, 8, 4, 6]) === 5); // Nearest prime to 32 is 37

// Nearest prime to 163 is 167
p(nearestPrimeSum([50, 39, 49, 6, 17, 2]) === 4);