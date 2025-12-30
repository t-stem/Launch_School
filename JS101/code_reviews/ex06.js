/*
Write a function that takes a non-empty string argument and returns the middle character(s) of the string.
If the string has an odd length, you should return exactly one character. 
If the string has an even length, you should return exactly two characters.
*/

function centerOf(string) {
  let l = string.length;
  if (l % 2 === 0) {
    let middleChars = string[(l / 2) - 1] + string[l / 2];
    return middleChars;
  } else {
    return string[Math.floor(l / 2)];
  }
}

/*
Does the solution meet the problem requirements?
- Yes, the solution meets the problem requirements.
- If the string is even in length, i.e. when (l % 2 === 0) is true, the function returns a new string (middleChars) with the middle two chars at positions (l / 2) - 1 and (l / 2) respectively
- Else (i.e. if string length is odd), the function returns a single character at position equal to the floor of l / 2, which is the correct middle character given zero indexing
- All pre-defined test cases return true

Is the code readable and easy to understand?
- Yes, the code is readable and easy to understand

Do variable and function names adhere to JavaScript naming conventions?
- Yes, the variable and function names use camelCase in line with Javascript naming conventions

Are the variable and function names meaningful and precise?
- most of them are, but the variable l could have been named length or stringLength to be more clear

Is the code formatted correctly and free of syntax errors?
- Yes, the code is formatted correctly and free of syntax errors
- As a suggestion, some empty lines could be added to improve legibility

Is the solution repetitive or overly complex?
- There is some repetition in the code, namely the value of l / 2. This could be stored in a separate variable or constant
- The code is not overly complex

Would it make more sense to use different looping or conditional structures?
- The logic could be captured using the ternary operator
- l % 2 === 0 ? string[(l / 2) - 1] + string[l / 2] : string[Math.floor(l / 2)];

Would the solution benefit from helper functions?
- Not necessarily a helper function, but a helper variable could be used to capture the value of l/2 as mentioned above

Consider running the code through ESLint and discussing any issues raised.
- Apart from the length of the l variable (which has been pointed out above), ESlint didn't flag any issues.
*/


// These examples should all log True
console.log(centerOf('I Love JavaScript') === "a");
console.log(centerOf('Launch School') === " ");
console.log(centerOf('Launch') === "un");
console.log(centerOf('Launchschool') === "hs");
console.log(centerOf('x') === "x");