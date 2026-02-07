/*
Write a hexadecimalToInteger() function that converts a string representing a hexadecimal number to its integer value. 

Note that hexadecimal numbers use base 16 instead of 10, and the "digits" A, B, C, D, E, and F (and the lowercase equivalents) correspond to decimal values of 10-15.

PROBLEM
- Input: string representing a hexadecimal number
- Output: hexadecimal number to its integer value

- Explicit rules: 
- hexadecimal numbers use base 16 instead of 10, and the "digits" A, B, C, D, E, and F (and the lowercase equivalents) correspond to decimal values of 10-15.

EXAMPLES

DATA STRUCTURES
{hex: int value}

[hexadecimal digits]
[integever values of hex digits]


ALGORITHM
1) Loop through digits last to first (iterator i = length - 1)
  - Look up intValue of each digit
  - Multiple intValue by 16 to the power length - i
  - Add result to output

2) Split array into digits
3) Covert each digit to integer value
4) Reverse array
5) Multiply each element by appropriate power of 10



*/

function hexadecimalToInteger(hex) {
  let BASE = 16;
  let hexToInt = {0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15};

  let hexArr = hex.split('');
  let intArr = hexArr.map(hexDigit => hexToInt[hexDigit.toUpperCase()]);
  let intVals = intArr.reverse().map((val, index) => val * 16 ** index);
  let int = intVals.reduce((sum, num) => sum + num, 0);
  console.log(int)
}


hexadecimalToInteger('4D9f') === 19871;
