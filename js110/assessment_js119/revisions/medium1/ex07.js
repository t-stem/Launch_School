/*
Write a recursive function that computes the nth Fibonacci number, where nth is an argument passed to the function.

NOTE: This exercise verges on the Advanced level of exercises, so do not be discouraged if you are not able to solve it on your own; 

recursion is tricky, and even experienced developers can have difficulty dealing with it.



*/

function fibonacci(num) {
  if (num === 1) return 1;
  if (num === 2) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}


console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765