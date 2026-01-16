/*

Write a function that displays an 8-pointed star in an NxN grid, 
where N is an odd integer that is supplied as an argument to the function. 

The smallest such star you need to handle is a 7x7 grid (i.e., when N is 7).

*/

function star(oddInt) {
  let halfStarRows = Math.floor(oddInt / 2);
  let halfStar = '';

  for (let row = 0; row < halfStarRows; row += 1) {
    let totalSpaces = oddInt - 3;
    let outerSpaceReps = row;
    let innerSpaceReps = totalSpaces / 2 - outerSpaceReps;

    let outerSpaces = ' '.repeat(outerSpaceReps);
    let innerSpaces = ' '.repeat(innerSpaceReps);

    halfStar = halfStar + outerSpaces + '*' + innerSpaces + '*' + innerSpaces + '*' + outerSpaces + '\n';
  }

  middleRow = '*'.repeat(oddInt);

  console.log(halfStar + middleRow + halfStar.split('').reverse().join(''));
}

star(7);
/* logs
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *
*/

star(9);
/* logs
*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *
*/
