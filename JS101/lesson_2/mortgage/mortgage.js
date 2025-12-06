let readlineSync = require("readline-sync");

let loanUSD;
let loanYears;
let APR;

do {
    loanUSD = Number(readlineSync.question("Please enter loan amount in US$: "));
}
while (Number.isNaN(loanUSD) || loanUSD <= 0);

do {
    loanYears = Number(readlineSync.question("Please enter loan duration in years: "));
}
while (Number.isNaN(loanYears) || loanYears <= 0);

do {
    APR = Number(readlineSync.question("Please enter APR without % sign (for 1.5% enter 1.5): "));
}
while (Number.isNaN(APR) || APR < 0);

let loanMonths = Math.floor(loanYears  * 12); // .floor method is a design choice to reflect that the number of months should be discrete. This behaviour deviates slightly from the behavior on https://www.calculator.net/loan-calculator.html
let monthlyInterestRate = APR / 12 / 100;
let monthlyPayment;

console.log(loanMonths)

if (APR === 0) {
    monthlyPayment = loanUSD / loanMonths;
} else {
    monthlyPayment = loanUSD * (monthlyInterestRate / (1 - ((1 + monthlyInterestRate) ** (-loanMonths))));
}

console.log(`Your monthly payment is: $${monthlyPayment.toFixed(2)}`);