/*
We are assigned the task to implement a range function that returns an array of integers beginning and ending with specified start and end numbers. 
When only a single argument is provided, that argument should be used as the ending number and the starting number should be 0.

Check our code below. Why do the example invocations fail with an error saying Maximum call stack size exceeded? 
Can you fix the code, so it runs without error and satisfies the requirements?
*/

/* ANSWER
Essentially, there are two definitions of the range function, which means that the first one is overwritten by the second one.
The second one is a recursive function that doesn't have a terminating condition.
Therefore, it will infinitely call itself, which will call the maximum call stack size to be exceeded.


*/


function rangeWRONG2(start, end = -1) {
  let range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

function rangeWRONG (end) {
  return range(0, end);
}

function range(start = 0, end) {
  let output = [];

  if (end === undefined) {
    end = start;
    start = 0;
  }

  for (let i = start; i <= end; i += 1) {
    output.push(i);
  }

  return output;
}

// Examples

console.log(range(10, 20));
console.log(range(5));