/* Write a function that takes a string argument and returns a new string that contains the value of the original string 
with all consecutive duplicate characters collapsed into a single character.
*/

function crunch(text) {
  let result = '';
  let i = 0;
  while (i < text.length) {
    if (i < text.length - 1) { 
      if (text[i] != text[i + 1]) {
        result += text[i];
      }
    } else {
      result += text[i];
    }
    i += 1;
  }
  return result;
}

/*
Does the solution meet the problem requirements?
- Yes

Is the code readable and easy to understand?
- The code is readable and understandable

Do variable and function names adhere to JavaScript naming conventions?
- Yes, the variable names adhere to Javascript naming conventions (camelCase, althought there are no names that consist of multiple words)

Are the variable and function names meaningful and precise?
- The names could be slightly improved, e.g. using inputText instead of text

Is the code formatted correctly and free of syntax errors?
- Yes, it is formatted correctly and free of syntax errors, but could benefit from some empty lines between sections of code (e.g. after declaring two variables using let)

Is the solution repetitive or overly complex?
- text.length is repeated and could be stored in a separate variable or constant
- a for loop might be more appropriate than a while loop in this case, since its syntax is best suited for a pre-defined number of iterations
- using a for loop, the loop could start at index position 0 and end at index position text.length - 1 to eliminate the if (i < text.length - 1) statement
- the code that appends a new char to the 'result' string is repetitive (please see suggestion below)

Would it make more sense to use different looping or conditional structures?
- Yes, see previous comment on usage of for loop

Would the solution benefit from helper functions?
- the code that appends a new char to the 'result' string is repetitive and could be moved to a helper function (result += text[i]);
- the logic that checks whether a char is equal to the next char could also be moved to the helper function if used repeatedly

Consider running the code through ESLint and discussing any issues raised.
- ESlint flagged that the i variable name is too short, but i is conventionally used as an iterator so this is reasonable

*/


// These examples should all log True
console.log(crunch('ddaaiillyy ddoouubbllee') === "daily double");
console.log(crunch('4444abcabccba') === "4abcabcba");
console.log(crunch('ggggggggggggggg') === "g");
console.log(crunch('a') === "a");
console.log(crunch('') === "");
