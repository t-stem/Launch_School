/*
In the previous exercise, you wrote a function that transposed a 3x3 matrix represented by an array of arrays.

Matrix transposes are not limited to 3x3 matrices, or even square matrices. Any matrix can be transposed simply by switching columns with rows.

Modify your transpose function from the previous exercise so that it works with any MxN matrix with at least one row and one column.
*/

// Outer loop: loop through the columns
  // Create a new row in newMatrix for each column
  // Populate the row in newMatrix with the values in the column from oldMatrix
    // Fix the columnIndex for oldMatrix[rowIndex][columnIndex]
    // Loop through the rows of oldMatrix[rowIdex][columnIndex]
    // Push each value to the new row in newMatrix

function transpose(oldMatrix) {
  let newMatrix = []
  let lastRowIndex = oldMatrix.length - 1;
  let lastColumnIndex = oldMatrix[0].length - 1;

  for (let currOldColumn = 0; currOldColumn <= lastColumnIndex; currOldColumn += 1) {
    let newMatrixRow = [];
    newMatrix.push(newMatrixRow);
    
    for (let currOldRow = 0; currOldRow <= lastRowIndex; currOldRow += 1) {
      newMatrixRow.push(oldMatrix[currOldRow][currOldColumn]);
    }
  }

  return newMatrix;
}

const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
console.log(matrix);         // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]

