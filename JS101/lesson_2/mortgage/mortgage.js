let readlineSync = require("readline-sync");

function validateInput(input) {
    if (Number.isNaN(input)) {
        return 1;
    } else if (input <= 0) {
        return 2;
    } else {return 0};
}

function validateInputAPR(inputAPR) {
    if (Number.isNaN(inputAPR)) {
        return 1;
    } else if (inputAPR < 0) {
        return 2;
    } else {return 0};
}

function getAmount() {
    let amountUSD;
    do {
        amountUSD = Number(readlineSync.question("Please enter loan amount in US$: "));
        switch (validateInput(amountUSD)) {
            case 1:
                console.log("The amount must be a number.");
                break;
            case 2:
                console.log("The amount must be bigger than 0.");
                break;
        }
    }
    while (validateInput(amountUSD));

    return amountUSD;
}

function getDuration() {
    let durationYears;
    do {
        durationYears = Number(readlineSync.question("Please enter loan duration in years: "));
        switch (validateInput(durationYears)) {
            case 1:
                console.log("The duration must be a number.");
                break;
            case 2:
                console.log("The duration must be bigger than 0.");
                break;
        }
    }
    while (validateInput(durationYears));

    return durationYears;
}

function getAPR() {
    let rateAPR;
    do {
        rateAPR = Number(readlineSync.question("Please enter APR without % sign (for 1.5% enter 1.5): "));
        switch (validateInputAPR(rateAPR)) {
            case 1:
                console.log("The APR must be a number.");
                break;
            case 2:
                console.log("The APR must be bigger than or equal to 0.");
                break;
        }
    }
    while (validateInputAPR(rateAPR));

    return rateAPR;
}

function calculateLoan() {
    let loanUSD = getAmount();
    let loanYears = getDuration();
    let APR = getAPR();

    let loanMonths = Math.floor(loanYears  * 12); // .floor method is a design choice to reflect that the number of months should be discrete. This behaviour deviates slightly from the behavior on https://www.calculator.net/loan-calculator.html
    let monthlyInterestRate = APR / 12 / 100;
    let monthlyPayment;

    if (APR === 0) {
        monthlyPayment = loanUSD / loanMonths;
    } else {
        monthlyPayment = loanUSD * (
            monthlyInterestRate /
                    (1 - ((1 + monthlyInterestRate) ** (-loanMonths)))
        );
    }

    console.log(`Your monthly payment is: $${monthlyPayment.toFixed(2)}`);
}

let repeat = "";
const allowedAffirmatives = Object.freeze(['Yes', 'yes', 'Y', 'y']);
const allowedNegatives = Object.freeze(['No', 'no', 'N', 'n']);

function validateAffirmative(response) {
    return allowedAffirmatives.includes(response);
}

function validateNegative(response) {
    return allowedNegatives.includes(response);
}

do {
    calculateLoan();
    while (true) {
        repeat = readlineSync.question("Calculate another loan? Enter Yes/No.\n");
        if (validateAffirmative(repeat) || validateNegative(repeat)) {
            break;
        } else {
            console.log("Invalid response. Please enter Yes or No.");
        }
    }
}
while (validateAffirmative(repeat));