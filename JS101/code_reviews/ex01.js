// Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

// Launch School student Ursula has submitted a solution for this problem. 
// Your job is to perform a code review for her solution:

let i = 1;
while (i < 99) {
  if (i % 2 === 1) {
    console.log(i);
  }
  i = i + 1;
}


/* 
CODE REVIEW:
- Does the solution meet the problem requirements?
It doesn't meet the problem requirement to up to 99 inclusive because the while loop starts at 1 and continues while i < 99, which means that it ends at 98 (i.e. 99 exclusive)

- Is the code readable and easy to understand?
Yes, it is easy to understand. One suggestion would be to rewrite the last line as i += 1;

- Do variable and function names adhere to JavaScript naming conventions?
Yes they do, but the developer could have used more descriptive names. 

- Are the variable and function names meaningful and precise?
The developer could have used more descriptive names. Instead of i, they could have used iterator for examp

- Is the code formatted correctly and free of syntax errors?
Yes

- Is the solution repetitive or overly complex?
No

- Would it make more sense to use different looping or conditional structures?
A for loop might be more appropriate here since we're using an iterator to define how many times the loop will repeat itself
e.g. for (number = 1; number < 100; number += 1)

- Would the solution benefit from helper functions?
No parts of the code are repeating themselves and there are no overly long functions, so this doesn't seem necessary.

- Consider running the code through ESLint and discussing any issues raised.
ESlint suggests two of the points mentioned above: 
1) replacing the i variable name with a longer name
2) using operator assignment += in the last line

*/

