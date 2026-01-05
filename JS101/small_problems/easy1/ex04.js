/* Build a program that asks the user to enter the length and width of a room in meters, 
and then logs the area of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the readlineSync.prompt method 
to collect user input.

*/

let readline = require("readline-sync");

const FEET_CONVERSION = 10.7639; // improvement: name const in all caps
let length = Number(readline.question("Please enter length in meters: ")); // improvement: convert input strings to numbers right away -> mimic example given
let width = Number(readline.question("Please enter width in meters: "));
let areaSqM = width * length; // improvement: added variables for area
let areaSqFt = areaSqM * FEET_CONVERSION;


console.log(`The area of the room is ${areaSqM.toFixed(2)} square meters (${areaSqFt.toFixed(2)} square feet).`) // correction: output consistency with problem statement, one phrase with numbers rounded to two decimals


