/*
Perform the same transformation of sorting the subarrays we did in the previous exercise with one difference; sort the elements in descending order.
*/

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

function sortNestedArrayDesc(inputArray) {
  return arr.map(subArray => {
    if (typeof subArray[0] === 'number') {
      return subArray.slice().sort((a, b) => b - a);
    } else {
      return subArray.slice().sort().reverse();
    }
  });
}

console.log(sortNestedArrayDesc(arr));