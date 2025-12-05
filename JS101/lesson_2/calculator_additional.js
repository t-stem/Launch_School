const calculatorMessages = require("./calculator_messages.json");
const readlineSync = require("readline-sync");
const language = readlineSync.question("Please enter English or Dutch:\n");

console.log(calculatorMessages[language].welcome);

function prompt(stringInput) {
    console.log(`=> ${stringInput}`);
}

function invalidNumber (inputNumber) {
    return inputNumber.trimStart() === '' || Number.isNaN(Number(inputNumber));
}

function calculation() {

    let number1;
    let number2;
    let output;

    do {
        prompt(calculatorMessages[language].first);
        number1 = readlineSync.question();
    }
    while (invalidNumber(number1) === true);

    do {
    prompt(calculatorMessages[language].second);
    number2 = readlineSync.question();
    }
    while (invalidNumber(number2) === true);

    let operation;
    let allowedOperations = ['1', '2', '3', '4'];
    while (!allowedOperations.includes(operation)) {
        prompt(calculatorMessages[language].options);
        operation = readlineSync.question();
    }

    switch (operation) {
        case '1':
            output = Number(number1) + Number(number2);
            break;
        case '2':
            output = Number(number1) - Number(number2);
            break;
        case '3':
            output = Number(number1) * Number(number2);
            break;
        case '4':
            output = Number(number1) / Number(number2);
            break;
    }

    prompt(calculatorMessages[language].result + output);
}

let nextCalc;
do {
    nextCalc = "";
    calculation();
    while (nextCalc !== 'Yes' && nextCalc !== 'No') {
        nextCalc = readlineSync.question(calculatorMessages[language].repeat);
    }
}
while (nextCalc === 'Yes');

