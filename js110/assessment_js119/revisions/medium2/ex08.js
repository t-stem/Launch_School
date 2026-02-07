/*
A prime number is a positive number that is evenly divisible only by itself and 1. 

Thus, 23 is prime since its only divisors are 1 and 23. 
However, 24 is not prime since it has divisors of 1, 2, 3, 4, 6, 8, 12, and 24. Note that the number 1 is not prime.

Write a method that takes a positive integer as an argument and returns true if the number is prime, false if it is not prime.

PROBLEM:
- Input: number
- Ouput: boolean (true if prime, false if no prime)

DATA STRUCTURES:
- 

ALGORITHM:
- SET i = 2
- WHILE i < num
  IF num % i === 0;
    RETURN false
  RETURN true
*/

function isPrime(num) {
  if (num === 1) return false;

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }

  return true;
}

console.log(isPrime(1) === false)            // true
console.log(isPrime(2) === true)             // true
console.log(isPrime(3) === true)             // true
console.log(isPrime(4) === false)            // true
console.log(isPrime(5) === true)             // true
console.log(isPrime(6) === false)            // true
console.log(isPrime(7) === true)             // true
console.log(isPrime(8) === false)            // true
console.log(isPrime(9) === false)            // true
console.log(isPrime(10) === false)           // true
console.log(isPrime(23) === true)            // true
console.log(isPrime(24) === false)           // true
console.log(isPrime(997) === true)           // true
console.log(isPrime(998) === false)          // true
console.log(isPrime(3_297_061) === true)     // true
console.log(isPrime(23_297_061) === false)   // true