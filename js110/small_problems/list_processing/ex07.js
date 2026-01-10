/*
Write a function that takes an array of numbers and returns the sum of the sums
of each leading subsequence in that array. Examine the examples to see what we mean. 
You may assume that the array always contains at least one number.
*/

function sumOfSums(numbersArray) {
  let result = 0;
  for (let i = 1; i <= numbersArray.length; i += 1) {
    result += numbersArray
    .slice(0, i)
    .reduce((sum, element) => sum + element, 0);
  }
  return result;
}

// test cases sumOfSums()
console.log(sumOfSums([3, 5, 2]) === 21);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]) === 36);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]) === 4);              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]) === 35);  // 35

