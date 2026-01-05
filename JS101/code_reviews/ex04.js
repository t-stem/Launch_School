/* Write a function that takes two arguments: a positive integer and a string. 
The function should compute and return the sum or product of all numbers between 1 and the supplied number, inclusive. 
It should calculate the sum if the string argument is the string '+', or the product if the string argument is '*'.

You may assume that the number passed in is an integer greater than 1. 
If the string argument is not '+' or '*', the function should return null.

Launch School student Iqbal has submitted a solution for this problem. 
Your job is to perform a code review for his solution:
*/

function compute(num, op) {
  if (op === '+') {
    let res = 0;
    for (let i = 1; i <= num; i++) {
      res += i;
    }
    return res;
  } else if (op === '*') {
    let res = 1;
    for (let i = 1; i <= num; i++) {
      res *= i;
    }
    return res;
  } else {
    return null;
  }
}

/*
- Does the solution meet the problem requirements?
Yes, the solution meets the requirements.
If the string argument is not equal to '+' or '*' the function will return null.
If the string argument is '+' it will loop through all numbers between 1 and the number argument inclusive and add them to the res variable, which has been initialized locally (local scope) as zero.
If the string argument is '*' it will loop through all numbers between 1 and the number argument inclusive  and multiply them with the res variable, assigning the resul of the multiplication to the res variable.
In this case, the res variable is intitialized locally as 1 to make sure that the outcome won't equal 0. 
The program also passes all of the tests at the bottom of this file. 

- Is the code readable and easy to understand?
It's readable, but it could be easier to understand by using variable names that are more meaningful (see suggestions below).

- Do variable and function names adhere to JavaScript naming conventions?
Yes, they adhere to JavaScript naming conventions but they could be more meaningful (see suggestions below)

- Are the variable and function names meaningful and precise?
The variable names are not immediately clear and require further examination of the code to understand.
Suggested names could be suppliedNumber for num, chosenOperator for op and currentNumber for i.

- Is the code formatted correctly and free of syntax errors?
The formatting could be improved slightly, e.g. by adding some empty lines (potentially after the let declarations)

- Is the solution repetitive or overly complex?
The for loop is essentially repeated twice, which could be simplified (see below)

- Would it make more sense to use different looping or conditional structures?
The validity of the string argument can be checked by means of an if statement with an || operator at the start of the function. If it's invalid, null can be returned immediately and the rest of the function can be short-circuited.
Since the for loop is repeated twice, the code could be shortened by putting an if statement in the body of the for loop as follows:

if (!(op === '+' || op === '*')) {
  return null;
}

let output = 0;
for (currentNumber = 1; currentNumber <= suppliedNumber; currentNumber += 1) {
  if (op == '+') {
    output += currentNumber;
  } else {
    output = (output === 0 ? output + 1 : output);
    output *= currentNumber;
  }
}

- Would the solution benefit from helper functions?
There are no overly large blocks of code.
There are no identical repetitive blocks of code either.
Overall, helper functions would not materially improve the program. 

- Consider running the code through ESLint and discussing any issues raised.
ESLint didn't raise any concerns that have not yet been addressed above. 


*/



// These examples should all log True
console.log(compute(5, '+') === 15);
console.log(compute(6, '*') === 720);
console.log(compute(7, '-') === null);