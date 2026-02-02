
/* Write a function that takes two arrays as arguments and returns an array containing the union 
of the values from the two. 

There should be no duplication of values in the returned array, 
even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.

PROBLEM:
- Inputs: two arrays
- Outputs: an array containing the union of the values from the two

Explicit rules:
- There should be no duplication of values in the returned array, even if there are duplicates in the original arrays.
- You may assume that both arguments will always be arrays.

EXAMPLES

DATA STRUCTURES:
- {element: count}
- [keys]

- [all elements]
- [filtered for duplicates]


ALGORITHM:
- SET unionArr = []

- Loop through arr1
  * Push all items to unionArr

- Loop through arr2
  * IF currElement doesn't exist in unionArr
    Push currElement to unionArr

RETURN unionArr



*/ 

function countElements(arr, tally) {
  arr.forEach(element => {
    tally[element] = (tally[element] || 0) + 1;
  });
}

function union(arr1, arr2) {
  let elementCounts = {}

  countElements(arr1, elementCounts);
  countElements(arr2, elementCounts);

  return Object.keys(elementCounts);
}


console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]