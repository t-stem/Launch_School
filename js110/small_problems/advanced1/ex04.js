/*
Write a function that takes an arbitrary MxN matrix, rotates it clockwise by 90-degrees as described above, 
and returns the result as a new matrix. 

The function should not mutate the original matrix.
*/

function rotate90(inputMatrix) {
  let outputMatrix = [];
  let inputColumnCount = inputMatrix[0].length;
  let inputRowCount = inputMatrix.length;

  for (let inputColumnIndex = 0; inputColumnIndex < inputColumnCount; inputColumnIndex += 1) {
    let newOutputRow = [];
    outputMatrix.push(newOutputRow);

    for (let inputRowIndex = 0; inputRowIndex < inputRowCount; inputRowIndex += 1) {
      let currentValue = inputMatrix[inputRowIndex][inputColumnIndex];
      newOutputRow.push(currentValue);
    }

    newOutputRow.reverse();
  }

  return outputMatrix;
}



let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]