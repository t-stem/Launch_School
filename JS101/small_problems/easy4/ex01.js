/* 
Write a program that solicits six numbers from the user and logs a message that describes whether the sixth number appears among the first five numbers.
*/

let readlineSync = require('readline-sync');

let numbers = [];

function validateInput(input) {
  return !isNaN(input); // IMPROVEMENT: ADJUSTED FUNCTION TO REFLECT PASSING inputToNumber AS AN ARGUMENT INSTEAD OF userInput
}

let inputToNumber; // changed global variable to inputToNumber
for (let i = 0; i < 6; i += 1) {
  do {
    let userInput = readlineSync.question("Please enter a number: "); // changed userInput to local variable
    inputToNumber = Number(userInput); // IMPROVEMENT: stored Number(userInput) in a variable

    if (validateInput(inputToNumber)) { // IMPROVEMENT: VALIDATING inputToNumber RATHER THAN userInput
      numbers.push(inputToNumber); // IMPROVEMENT: pushed inputToNumber RATHER THAN userInput
    } else {
      console.log("Error: value entered is not a number.");
    }
  } 
  while (!validateInput(inputToNumber)) // IMPROVEMENT: VALIDATE inputToNumber FOR CONSITENCY WITH 
}

if (numbers.slice(0, 5).includes(numbers[5])) { // CORRECTION: SLICE NEEDS TO USE INDEX 5 RATHER THAN FOUR, OTHERWISE THE FOURTH ELEMENT IS NOT INCLUDED
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


