/*
The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) such that the first two numbers are 1 by definition, 
and each subsequent number is the sum of the two previous numbers. Fibonacci numbers often appear in mathematics and nature.

Computationally, the Fibonacci series is a simple series, but the results grow at an incredibly rapid rate. 
For example, the 100th Fibonacci number is 354,224,848,179,261,915,075—that's enormous, 
especially considering that it takes six iterations just to find the first 2-digit Fibonacci number.

Write a function that calculates and returns the index of the first Fibonacci number that has the
number of digits specified by the argument. (The first Fibonacci number has an index of 1.)

You may assume that the argument is always an integer greater than or equal to 2.


PROBLEM:
- INPUTS: target digits of fibonacci
- Outputs: index of first fibonacci with target digits (BIGINT!)

Explicit rules:
- You may assume that the argument is always an integer greater than or equal to 2.

EXAMPLES:

DATA STRUCTURES:
- [fib sequence]

ALGORITHM
SET fib = [1, 1];

SET currElement = last element in sequence
WHILE countDigits(currElement) doesn't equal targetDigits
  nextFib(fib)
  currElement = last element in fib

countDigits(int)
  RETURN length of int converted into string

nextFib(sequence)
  SET lastIndex = length of sequence - 1
  RETURN last element + penultimate element
*/

function countDigits(num) {
  return BigInt(String(num).length);
}

function findFibonacciIndexByLength(target) {
  let fibonacci = [1n, 1n];
  let currElement = fibonacci[1];

  while (countDigits(currElement) !== target) {
    let lastIndex = fibonacci.length - 1;
    currElement = fibonacci[lastIndex] + fibonacci[lastIndex - 1];
    fibonacci.push(currElement);
  }

  return BigInt(fibonacci.length);
}


console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
// findFibonacciIndexByLength(10000n) === 47847n;

// The last example may take a minute or so to run.