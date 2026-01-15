/*
Our recursive fibonacci function from an earlier exercise isn't very efficient. 

It starts slowing down with an nth argument value as low as 35. 

One way to improve the performance of our recursive fibonacci function (and other recursive functions) is to use memoization.

Memoization is an approach that involves saving a computed answer for future reuse, instead of computing it from scratch every time it is needed. 
In the case of our recursive fibonacci function, using memoization saves calls to fibonacci(nth - 2) because the necessary values have already been computed by the recursive calls to fibonacci(nth - 1).

For this exercise, your objective is to refactor the recursive fibonacci function to use memoization.

review
*/

function fibonacci(inputNumber) {
  let sequence = [null, 1, 1];
  
  function checkSequence(number) {
    if (sequence[number]){
      return sequence[number];

    } else {
      let fib = fibonacci(number);
      sequence[number] = fib; // IMPROVEMENT: reworked from sequence.push() to make it explicity that the correct number is stored at the correct index
      
      return fib;
    }
  }

  function fibonacciNth(n) {
    if (n > 2) {
      let fib1 = checkSequence(n - 1);
      let fib2 = checkSequence(n - 2);
      
      return fib1 + fib2; 
    }
    
    return 1;
  }

  return fibonacciNth(inputNumber);
}

console.log(fibonacciSequence(1));       // 1
console.log(fibonacciSequence(2));       // 1
console.log(fibonacciSequence(3));       // 2
console.log(fibonacciSequence(4));       // 3
console.log(fibonacciSequence(5));       // 5
console.log(fibonacciSequence(12));      // 144
console.log(fibonacciSequence(75));      // 2111485077978050
