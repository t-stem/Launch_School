/* 
Write a program that solicits six numbers from the user and logs a message that describes whether the sixth number appears among the first five numbers.
*/

let readlineSync = require('readline-sync');

let numbers = [];

function validateInput(input) {
  return !isNaN(Number(input))
}

let userInput;
for (let i = 0; i < 6; i += 1) {
  do {
    userInput = readlineSync.question("Please enter a number: ");
    if (validateInput(userInput)) {
      numbers.push(userInput);
    } else {
      console.log("Error: value entered is not a number.");
    }
  } 
  while (!validateInput(userInput))
}

if (numbers.slice(0, 4).includes(numbers[5])) {
  console.log("Sixth number appears among the first five numbers.");
} else {
  console.log("Sixth number doesn't appear among the first five numbers.");
}



/*
Examples

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in 25,15,20,17,23.
*/


