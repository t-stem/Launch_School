/*
Write a function that displays a four-pointed diamond in an nxn grid, 
where n is an odd integer supplied as an argument to the function. 

You may assume that the argument will always be an odd integer.
*/

/*
SET i = 1
SET totalSpaces = n - 1
set leftSpaces = spaces / 2;
set rightSpaces = left spaces;

WHILE i <= n
  PRINT left spaces + '*' repeated i times + rightSpaces
  */

function diamond(oddInt) {
  let halfDiamond = '';

  for (let i = 1; i <= oddInt - 2; i += 2) {
    let totalSpaces = oddInt - i;
    let spacesOneSide = ' '.repeat(totalSpaces / 2);
    let asterisks = '*'.repeat(i);
 
    halfDiamond = halfDiamond + spacesOneSide + asterisks + spacesOneSide + '\n';
  }

  let middleRow = '*'.repeat(oddInt);

  console.log(halfDiamond + middleRow + halfDiamond.split('').reverse().join(''));
}

// test cases
diamond(1);
/* logs
*
*/

diamond(3);
/* logs
 *
***
 *
*/

diamond(9);
/* logs
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/