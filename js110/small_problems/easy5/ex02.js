/* Write a function that takes two arrays as arguments and returns an array containing the union 
of the values from the two. 

There should be no duplication of values in the returned array, 
even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.

revise/simplify
*/ 

function union(array1, array2) {
  let newArray = array1.concat(array2);

  let i = 0;

  while (i < newArray.length) {

    let duplicateIndex; // IMPROVEMENT: doesn't need to be initialized to zero

    do {
      duplicateIndex = newArray.indexOf(newArray[i], i + 1)
      if (duplicateIndex !== -1) { // Fix: used !== instead of !=
        newArray.splice(duplicateIndex, 1);
      }
    }
    while (duplicateIndex !== -1) 

    i += 1;
  }

  return newArray;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]