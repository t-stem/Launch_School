/* Write a function that takes two arrays as arguments and returns an array containing the union 
of the values from the two. 

There should be no duplication of values in the returned array, 
even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.

*/

function union(array1, array2) {
  let newArray = array1.concat(array2);

  newArray.sort((a, b) => a - b)

  let i = 0;

  while (i < newArray.length) {

    let duplicateIndex = 0;

    do {
      duplicateIndex = newArray.indexOf(newArray[i], i + 1)
      if (duplicateIndex != -1) {
        newArray.splice(duplicateIndex, 1);
      }
    }
    while (duplicateIndex !== -1) {

    i += 1;
    
    }
  }

  return newArray;
}