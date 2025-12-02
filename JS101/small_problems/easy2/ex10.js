/* Build a program that logs when the user will retire and how many more years
 the user has to work until retirement. 
*/

let readlineSync = require("readline-sync");

const CURRENT_YEAR = 2017;
let currentAge = Number(readlineSync.question("What is your age? "));
let retirementAge = Number(readlineSync.question("At what age would you like to retire? "));
let yearsToRetirement = retirementAge - currentAge;
let retirementYear = CURRENT_YEAR + yearsToRetirement;

console.log(`It's ${CURRENT_YEAR}. You will retire in ${retirementYear}.
You have only ${yearsToRetirement} years of work to go!`);


/*
What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!
*/