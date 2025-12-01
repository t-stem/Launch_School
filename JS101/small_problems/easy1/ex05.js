/* Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. 
The program must compute the tip, and then log both the tip and the total amount of the bill to the console. 
You can ignore input validation and assume that the user will enter valid positive numbers. */

// prompt for a bill amount
let readline = require('readline-sync');

let billAmount = Number(readline.question("Please enter bill amount: "));

// prompt for a a tip rate. 
let tipRate = Number(readline.question("Please enter tip rate: "));

// compute the tip
let tipAmount = billAmount * (tipRate / 100); // correction: updated so that tipRate is integer in line with requirements;

// log both the tip and the total amount of the bill to the console
console.log(`The tip is $${tipAmount.toFixed(2)}`); // correction: reformatted output to match exercise reqs (used toFixed() method to round to 2 decimals)
console.log(`The total is $${(billAmount + tipAmount).toFixed(2)}`);