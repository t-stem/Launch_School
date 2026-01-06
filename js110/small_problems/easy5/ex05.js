/*
Write a function that combines two arrays passed as arguments, 
and returns a new array that contains all elements from both array arguments, with each element taken in alternation.

You may assume that both input arrays are non-empty, and that they have the same number of elements.
*/

function interleave2(array1, array2) {
  let newArray = [];

  for (let i = 0; i < array1.length; i +=1) {
    newArray[i * 2] = array1[i];
  }

  for (let j = 0; j < array2.length; j += 1) {
    newArray[j * 2 + 1] = array2[j];
  }

  return newArray;
}

function interleave(array1, array2) { // ALTERNATIVE: since we assume the arrays are equal length, we can consider the elements in the two arrays as pairs
  let newArray = [];

  for (let element of array1) {
    newArray.push(element);

    let index = array1.indexOf(element);
    newArray.push(array2[index]);
  }
  
  return newArray;
}


console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]