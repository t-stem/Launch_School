/*
Create a function that takes an array of integers as an argument and returns the number of identical pairs of integers in that array. 

For instance, the number of identical pairs in [1, 2, 3, 2, 1] is 2: there are two occurrences each of both 2 and 1.

If the array is empty or contains exactly one value, return 0.

If a certain number occurs more than twice, count each complete pair once. 

For instance, for [1, 1, 1, 1] and [2, 2, 2, 2, 2], the function should return 2. The first array contains two complete pairs while the second has an extra 2 that isn't part of the other two pairs.

PROBLEM:
- inputs: array of integers
- output: the number of identical pairs of integers in that array

explicit rules
^ If the array is empty or contains exactly one value, return 0.
- If a certain number occurs more than twice, count each complete pair once. 

DATA STRUCTURES
- object {int: tally}
- array [indentical pairs]

ALGORITHM:
IF length inputArray < 2
  RETURN 0

1) 
- Get a tally of all int occurances in inputArray
- For each key in tally, get int part of count / 2
- Add outcome to counter

2) 
- push identical pairs to pairsArray as nested subarray
- RETURN legnth of pairsArray
*/

function pairs(inputArray) {
  if (inputArray.length < 2) return 0;
  
  let tally = {};

  inputArray.forEach(num => {
    if (Object.keys(tally).includes(String(num))) {
      tally[num] = tally[num] + 1;
    } else {
      tally[num] = 1;
    }
  });

  for (let num in tally) {
    tally[num] = Math.floor(tally[num] / 2);
  }

  return Object.values(tally).reduce((totalPairs, charPairCount) => totalPairs + charPairCount, 0);
}

const p = console.log;
p(pairs([3, 1, 4, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7]) === 3); // {3: 2, 1: 1, 4: 1, 5: 2, 9: 2, 6: 1, 8: 1, 7: 1} => {3: 1, 1: 0, 4: 0, 5: 1, 9: 1, 6: 0, 8: 0, 7: 0}
p(pairs([2, 7, 1, 8, 2, 8, 1, 8, 2, 8, 4]) === 4);
p(pairs([]) === 0);
p(pairs([23]) === 0);
p(pairs([997, 997]) === 1);
p(pairs([32, 32, 32]) === 1);
p(pairs([7, 7, 7, 7, 7, 7, 7]) === 3);