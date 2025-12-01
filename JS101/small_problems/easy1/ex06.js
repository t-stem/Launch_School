/* Write a program that asks the user to enter an integer greater than 0, 
then asks whether the user wants to determine the sum or the product of all 
numbers between 1 and the entered integer, inclusive. */

// require readline
let readline = require('readline-sync');

// define sum function for sum of all numbers between 1 and the entered integer, inclusive

function sumInt (int) {
    let accumulator = 1;
    for (let counter = 2; counter <= int; counter += 1) {
        accumulator += counter;
    }
    return accumulator;
}

// define product function for product of all numbers between 1 and the entered integer, inclusive

function productInt (int) {
    let accumulator = 1;
    for (let counter = 2; counter <= int; counter += 1) {
        accumulator *= counter;
    }
    return accumulator;
}

// ask the user to enter an integer greater than 0

let desiredInteger;

do {
    desiredInteger = Number(readline.question('Please enter an integer greater than 0: '));
}
while (desiredInteger < 1)

// asks whether the user wants to determine the sum or the product of all  numbers between 1 and the entered integer, inclusive
let desiredOperation;
do {
    desiredOperation = readline.question('Enter "s" to compute the sum, or "p" to compute the product: ')
} 
while (!(desiredOperation === 's' || desiredOperation === 'p')); // old version didn't work

// output the desired result
switch (desiredOperation) {
    case 's':
        console.log(`The sum of the integers between 1 and ${desiredInteger} is ${sumInt(desiredInteger)}.`);
        break;
    case 'p':
        console.log(`The product of the integers between 1 and ${desiredInteger} is ${productInt(desiredInteger)}.`);
        break;
}
