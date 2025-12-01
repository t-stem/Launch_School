/* Build a program that asks the user to enter the length and width of a room in meters, 
and then logs the area of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the readlineSync.prompt method 
to collect user input.

*/

let readline = require("readline-sync");

const feetConversion = 10.7639;
let length = readline.question("Please enter length in meters: ");
let width = readline.question("Please enter width in meters: ");

console.log(`Area in square meters = ${length * width}`);
console.log(`Area in square feet = ${length * width * feetConversion}`);

