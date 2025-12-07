const calculatorMessages = require("./calculator_messages.json");
const readlineSync = require("readline-sync");
const language = readlineSync.question("Please enter English or Dutch:\n");

console.log(calculatorMessages[language].welcome);

function prompt(stringInput) {
    console.log(`=> ${stringInput}`);
}

function getNumber(nthNumber) {
    prompt(calculatorMessages[language][nthNumber]);
    let chosenNumber = readlineSync.question();
    if (chosenNumber.trimStart() === '') {
        throw Error(calculatorMessages[language].errorEmpty);
    } else if (Number.isNaN(Number(chosenNumber))) {
        throw Error(calculatorMessages[language].errorNaN);
    } else {
        return Number(chosenNumber);
    }
}

function getOperation() {
    let operation;
    let allowedOperations = ['1', '2', '3', '4'];

    while (!allowedOperations.includes(operation)) {
        prompt(calculatorMessages[language].options);
        operation = readlineSync.question();
    }
    return operation;
}

function calculation(firstNumber, secondNumber, chosenOp) {
    let output;
    switch (chosenOp) {
        case '1':
            output = Number(firstNumber) + Number(secondNumber);
            break;
        case '2':
            output = Number(firstNumber) - Number(secondNumber);
            break;
        case '3':
            output = Number(firstNumber) * Number(secondNumber);
            break;
        case '4':
            if (secondNumber === 0) {
                throw Error(calculatorMessages[language].errorDivZero);
            } else {
                output = Number(firstNumber) / Number(secondNumber);
                break;
            }
    }
    prompt(calculatorMessages[language].result + output);
}

let nextCalc;
do {
    nextCalc = "";
    let number1 = getNumber("first");
    let number2 = getNumber("second");
    let operation = getOperation();

    calculation(number1, number2, operation);

    while (!calculatorMessages[language].allowedAffirm.includes(nextCalc) &&
            !calculatorMessages[language].allowedNeg.includes(nextCalc)) {
        nextCalc = readlineSync.question(calculatorMessages[language].repeat);
    }
}
while (calculatorMessages[language].allowedAffirm.includes(nextCalc));

