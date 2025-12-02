/* Write a program that prompts the user for two positive integers, 
and then prints the results of the following operations on those two numbers: 
addition, subtraction, product, quotient, remainder, and power. 

Do not worry about validating the input.*/ 

let readlineSync = require("readline-sync");

let int1 = Number(readlineSync.question("==> Enter the first number: ")); // correction: readline returns strings -> corrected to convert to numbers
let int2 = Number(readlineSync.question("==> Enter the second number: "));

console.log(`==> ${int1} + ${int2} = ${int1 + int2}`);
console.log(`==> ${int1} - ${int2} = ${int1 - int2}`);
console.log(`==> ${int1} * ${int2} = ${int1 * int2}`);
console.log(`==> ${int1} / ${int2} = ${int1 / int2}`);
console.log(`==> ${int1} % ${int2} = ${int1 % int2}`);
console.log(`==> ${int1} ** ${int2} = ${int1 ** int2}`);

/*
==> Enter the first number:
23
==> Enter the second number:
17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 1.4105003956066297e+23
*/