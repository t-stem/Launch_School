/*
Create a function that takes an array of integers as an argument. 

The function should determine the minimum integer value that can be appended to the array
 so the sum of all the elements equal the closest prime number that is greater than the current sum of the numbers. 
 
 For example, the numbers in [1, 2, 3] sum to 6. The nearest prime number greater than 6 is 7. 
 
 Thus, we can add 1 to the array to sum to 7.

 Notes:

  The array will always contain at least 2 integers.
  All values in the array must be positive (> 0).
  There may be multiple occurrences of the various numbers in the array.

  PROBLEM:
    - Input: an array of integers
    - Output: 
      * minimum integer value that can be appended to the array so
      * the sum of all the elements equal 
      * the closest prime number that is greater than
      * the current sum of the numbers. 
  
    - Explicit rules
      * The array will always contain at least 2 integers.
      * All values in the array must be positive (> 0).
      * There may be multiple occurrences of the various numbers in the array.
  
    - Implicit rules
      Prime is only divisible by itself
  
  EXAMPLES:

  DATA STRUCTURES:
    - [array of ints]

  ALGORITHM
    - Calc sum of ints in array
    - Calc nearest prime to sum (function);
        WHILE prime <= sum
          calcNextPrime(prime)
            WHILE there is no prime
              check if nextPrime + 2 is a prime
                WHILE i < nextPrime
                  IF nextPrime / i equals 0
                    RETURN FALSE
                RETURN TRUE
        

    - Calc difference between sum and nearest prime
    - Return difference

*/
function isPrime(num) {
  i = 3;

  while (i < num) {
    if (num % i === 0) return false;

    i += 2;
  }
  return true;
}

function nextPrime(currentPrime) {
  let nextOdd = currentPrime + 2;

  while (!isPrime(nextOdd)) {
    nextOdd += 2;
  }

  return nextOdd;
}

function nearestPrimeSum(inputArray) {
  let sum = inputArray.reduce((sum, num) => sum + num, 0);

  let currentPrime = 3;

  while (currentPrime <= sum) {
    currentPrime = nextPrime(currentPrime);
  }

  return currentPrime - sum;
}


const p = console.log;
p(nearestPrimeSum([1, 2, 3]) === 1);        // Nearest prime to 6 is 7
p(nearestPrimeSum([5, 2]) === 4);           // Nearest prime to 7 is 11
p(nearestPrimeSum([1, 1, 1]) === 2);        // Nearest prime to 3 is 5
p(nearestPrimeSum([2, 12, 8, 4, 6]) === 5); // Nearest prime to 32 is 37

// Nearest prime to 163 is 167
p(nearestPrimeSum([50, 39, 49, 6, 17, 2]) === 4);
