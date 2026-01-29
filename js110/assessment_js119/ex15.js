/*
Create a function that takes a string argument that consists entirely of numeric digits and computes 
the greatest product of four consecutive digits in the string. 

The argument will always have more than 4 digits.

PROBLEM:
  - Input: string that consists entirely of numeric digits a
  - Output: the greatest product of four consecutive digits in the string. 

Questions:
  - What if the string is less than four digits long?
    * Assume doesn't occur given test cases

DATA STRUCTURES:
 - [PRODUCTS OF 4 CONS DIGITS]
 - {combination of 4 cons digits: product}

 ALGORITHM:
 - SET i = 3
 - SET products = []
 - WHILE i < length of inputString
    Calc product of four prior digits inclusive
    Push product to products

 - Sort products descending
 - Return products[0];

  ALGORITHM:
 - SET i = 3
 - WHILE i < length of inputString
    Calc product of four prior digits inclusive
    IF product > largestProd
      SET largestProd = currProd

- RETURN largestProd
*/

function greatestProduct(digitString) {
  let greatestProd = 0;

  for (let currDigit = 3; currDigit < digitString.length; currDigit += 1) {
    let prod = digitString[currDigit] * digitString[currDigit - 1] * digitString[currDigit - 2] * digitString[currDigit - 3];
    if (prod > greatestProd) {
      greatestProd = prod;
    }
  }

  return greatestProd;
}

const p = console.log;
p(greatestProduct('23456') === 360);      // 3 * 4 * 5 * 6
p(greatestProduct('3145926') === 540);    // 5 * 9 * 2 * 6
p(greatestProduct('1828172') === 128);    // 1 * 8 * 2 * 8
p(greatestProduct('123987654') === 3024); // 9 * 8 * 7 * 6