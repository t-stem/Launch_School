/* 
Write a function that takes a positive integer, n, as an argument and logs a right triangle whose sides each have n stars. 
The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, 
and the other end at the upper-right.
*/

function triangle(height) {
  let line = 1;
  while (line <= height) {
    let spaces = '';
    for (let i = 0; i < height - line; i++) {
      spaces += ' ';
    }
    let stars = '';
    for (let i = 0; i < line; i++) {
      stars += '*';
    }
    console.log(spaces + stars);
    line += 1;
  }
}

/*
Does the solution meet the problem requirements?
- Yes, the function behaves as required

Is the code readable and easy to understand?
- Yes, but it could benefit from empty lines

Do variable and function names adhere to JavaScript naming conventions?
- None of the function and variable names violate JavaScript naming conventions

Are the variable and function names meaningful and precise?
Yes, it's clear what all of the function and variable names mean

Is the code formatted correctly and free of syntax errors?
- The code is formatted correctly, but could benefit from some empty lines

Is the solution repetitive or overly complex?
- The solution contains repetitive use of for loops, which could be simplified (see suggestion below)
- The number of spaces would be height - i and the number of stars would be i
- The stars and spaces variables are declared again and again on each iteration of the loop. This is not necessary and could be simplified by changing the loop structure

Would it make more sense to use different looping or conditional structures?
- for loop instead of while loop would be more appropriate given that the number of iterations is pre-defined
- repeated use of for loops nested within while loops could be simplified into one (keep iterator i), starting from 1 and looping until height

Would the solution benefit from helper functions?
- Helper functions wouldn't necessarily make the solution better

Consider running the code through ESLint and discussing any issues raised.
- ESlint flagged the length of the i variable as an issue, but iterators are conventionally labelled using i so this is not a problem

*/

triangle(5)
triangle(6)
triangle(1)