/* 
Write a function that takes an array of numbers and returns an array with the same number of elements, 
but with each element's value being the running total from the original array.

*/

function runningTotal2(inputArray) {
  let outputArray = [];
  let runningSum = 0; // IMPROVEMENT: avoid using variable names that are identical to function names - changed from runningTotal to runningSum
  
  for (let element of inputArray) { // CORRECTION: in for ... of loops, the loop variable also needs to be declared
    runningSum += element;
    outputArray.push(runningSum); 
  }

  return outputArray;
}

function runningTotal(inputArray) { // ALTERNATIVE SOLUTION: added alternative using map
  let runningSum = 0
  
  return inputArray.map(element => {
    runningSum += element;
    return runningSum // note: callback function needs to return a value to map method, which will be added to the new array
  }) 
}



console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []