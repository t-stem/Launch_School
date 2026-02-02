/*
Our recursive fibonacci function from an earlier exercise isn't very efficient. 

It starts slowing down with an nth argument value as low as 35. 

One way to improve the performance of our recursive fibonacci function (and other recursive functions) is to use memoization.

Memoization is an approach that involves saving a computed answer for future reuse, instead of computing it from scratch every time it is needed. 
In the case of our recursive fibonacci function, using memoization saves calls to fibonacci(nth - 2) because the necessary values have already been computed by the recursive calls to fibonacci(nth - 1).

For this exercise, your objective is to refactor the recursive fibonacci function to use memoization.

1 1 2 3 5 8 13
*/

let memory = {1: 1, 2: 1};
let mem = [null, 1, 1];

function fibonacciSequence2(n) {
  if (n === 1) return memory[1];
  if (n === 2) return memory[2];

  let n1;
  let n2;

  if (Object.keys(memory).includes(String(n - 1))) {
     n1 = memory[n - 1];
  } else {
    n1 = fibonacciSequence(n - 1);
    memory[n - 1] = n1;
  }

  if (Object.keys(memory).includes(String(n - 2))) {
    n2 = memory[n - 2];
  } else {
    n2 = fibonacciSequence(n - 2);
    memory[n - 2] = n2;
  }

  return n1 + n2;
}


function fibonacciSequence(n) {
  if (n === 1) return mem[1];
  if (n === 2) return mem[2];

  let n1;
  let n2;

  if (mem[n - 1] !== undefined) {
    n1 = mem[n - 1];
  } else {
    n1 = fibonacciSequence(n - 1);
    mem[n - 1] = n1
  }

  n2 = mem[n - 2];

  return n1 + n2;

}


console.log(fibonacciSequence(1));       // 1
console.log(fibonacciSequence(2));       // 1
console.log(fibonacciSequence(3));       // 2
console.log(fibonacciSequence(4));       // 3
console.log(fibonacciSequence(5));       // 5
console.log(fibonacciSequence(12));      // 144
console.log(fibonacciSequence(75));      // 2111485077978050