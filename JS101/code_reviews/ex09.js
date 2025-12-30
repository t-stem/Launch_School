/*
A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. 
For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number, in which case, return the double number as-is.

*/

function twice(n) {
  let a = String(n);
  let half = a.length / 2;
  if (a.length % 2 === 0 && a.slice(0, half) === a.slice(half)) {
    return n;
  } else {
    return n * 2;
  }
}

/*

Does the solution meet the problem requirements?
- All test cases are met
- The solution returns n if the n is even in length AND the left part (slice(0, half)) is equal to the right part (slice(half), i.e. when the number is a double number
- Otherwise, it returns n * 2

Is the code readable and easy to understand?
- The solution could benefit from empty lines in between sections of code

Do variable and function names adhere to JavaScript naming conventions?
- none of the variable or function names violate JavaScript naming conventions

Are the variable and function names meaningful and precise?
- some variables such as n and a could be more meaningful, such as inputNumber and numberToString respectively

Is the code formatted correctly and free of syntax errors?

Is the solution repetitive or overly complex?
- The solution doesn't conttain any repeptitive or overly complex code

Would it make more sense to use different looping or conditional structures?
- The conditional structure could be replaced by a ternary operator, but this may be less legible so the current structure is preferred

Would the solution benefit from helper functions?
- Helper functions wouldn't improve the solution

Consider running the code through ESLint and discussing any issues raised.
- Apart from short variable names (which are already mentioned above), ESlint didn't flag any other issues

*/

// These examples should all display True
console.log(twice(37) === 74);
console.log(twice(44) === 44);
console.log(twice(334433) === 668866);
console.log(twice(444) === 888);
console.log(twice(107) === 214);
console.log(twice(103103) === 103103);
console.log(twice(3333) === 3333);
console.log(twice(7676) === 7676);