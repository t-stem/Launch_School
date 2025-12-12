/*
In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, 
unless the year is also divisible by 100. 

Suppose the year is evenly divisible by 100. 
In that case, it is not a leap year, unless the year is also evenly divisible by 400.

Assume this rule is valid for any year greater than year 0. 

Write a function that takes any year greater than 0 as input and returns true if the year is a leap year, 
or false if it is not a leap year.
*/

function isLeapYear(year) {
  is_a_leap_year = false;
  if (year % 4 == 0) {
        is_a_leap_year = true;
  }
  if (year % 100 == 0) {
    is_a_leap_year = false;
  }
    if (year % 400 == 0) {
               is_a_leap_year = true;
  }
    return is_a_leap_year;
}


/*
CODE REVIEW

- Does the solution meet the problem requirements?
The program meets the requirements.
If the year is divisible by 400 the function will return true
If the year is divisible by 100 but not by 400, the function will return false
If the year is divisible by 4 but also by 100, the function will return false
if the year is divisible by 40 and not divisible by 100, the function will return true
All test cases below return true. 

- Is the code readable and easy to understand?
It is reasonable and easy to understand, but there are some potential formatting improvements that are discussed below.


- Do variable and function names adhere to JavaScript naming conventions?
No, JavaScript naming conventions prescribe camelCase for variables.
The variable could be renamed as isALeapYear to meet that convention.


- Are the variable and function names meaningful and precise?
Yes the variable and function names are clear


- Is the code formatted correctly and free of syntax errors?
The formatting and syntax could be improved
Consistenly using tabs equal to two spaces would make the code easier to read and align with JavaScript conventions
Currently, the bodies of the if statements are indented inconsistently. A single tab for all of them would suffice.
In addition, it's important to note that the is_a_leap_year variable is not declared using let. 
This means that it will act as a global variable if the function is used in a larger program. 
Finally, the conditions for the if statements use == rather than ===, which would be advisable. 
Using == compares truthy/falsy values rather than strict equality, which can lead to undesired behavior.

- Is the solution repetitive or overly complex?
The solution is repetitive since the is_a_leap_year variable is updated repeatedly in the control flow.
An alternative solution without such a variable would be possible as explained below.

- Would it make more sense to use different looping or conditional structures?
The conditional structure could be shortened and simplified by using if else statements and direct returns without using the is_a_loop_year variable

if (year % 400 === 0) {
  return true;
} else if (year % 100 === ) {
  return false;
} else {
  return year % 4 === 0;
}

- Would the solution benefit from helper functions?
Helper functions would not necessarily improve the function since there are no repeated or overly long blocks of code

- Consider running the code through ESLint and discussing any issues raised.
ESlint didn't pick up on any points that haven't been discussed above already.
*/




// These examples should all print True
console.log(isLeapYear(2016) === true);
console.log(isLeapYear(2015) === false);
console.log(isLeapYear(2100) === false);
console.log(isLeapYear(2400) === true);
console.log(isLeapYear(240000) === true);
console.log(isLeapYear(240001) === false);
console.log(isLeapYear(2000) === true);
console.log(isLeapYear(1900) === false);
console.log(isLeapYear(1752) === true);
console.log(isLeapYear(1700) === false);
console.log(isLeapYear(1) === false);
console.log(isLeapYear(100) === false);
console.log(isLeapYear(400) === true);