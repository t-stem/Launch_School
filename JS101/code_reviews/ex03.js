/* 
Write a function that computes the sum of all numbers between 1 and some other number, inclusive, 
that are multiples of 3 or 5. For instance, if the supplied number is 20, 
the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1.

Launch School student Stephanie has submitted a solution for this problem. Your job is to perform a code review for his solution:
*/

function multisum(x) {
  let result = 0;

  for (let y = 1; y < x; y ++) {
    if (y % 3 === 0) {
      result += y;
    } else if (y % 5 === 0) {
      result += y;
    }
  }

  return result;
}

/*
CODE REVIEW:

- Does the solution meet the problem requirements?
The function doesn't return the required result and fails the tests at the bottom of this file. 
The problem asks for the sum of all multiples of 3 and 5 between 1 and a given number, inclusive.
The for loop runs while the iterator (y) is smaller than the given number (x). 
This means that the given number itself (x) is excluded, rather than being included as required. 

- Is the code readable and easy to understand?
Yes the code is readable and easy to understand.

- Do variable and function names adhere to JavaScript naming conventions?
No, the function name follows snakecase rather than camelCase and could be rewritten as multiSum.
Apart from result, the variables are only one character each. They could be longer and more descriptive. 

- Are the variable and function names meaningful and precise?
Some variables x and y don't have meaningful names. 
It might be helpful to use checkFactors or something along those lines for y, and chosenNumber for x)


- Is the code formatted correctly and free of syntax errors?
There is a space between y and ++. For clarity, this space could be removed.

- Is the solution repetitive or overly complex?
The solution is structued in an adequate way, it's not overly complex. 

- Would it make more sense to use different looping or conditional structures?
The for loop is appropriate here given that the number of iterations is pre-determined by the input variable, which is captured well in a for loop.
ADDITION: the if else structure could be shortened by using an OR statement
if (y % 3 === 0 or y % 5 === 0) {
  result += y;
}

- Would the solution benefit from helper functions?
There are no repetitive or overly long blocks of code so helper functions wouldn't be beneficial here. 

- Consider running the code through ESLint and discussing any issues raised.
Apart from the extra space between y and ++ that's discussed above, ESLint didn't raise any concerns. 

*/

// These examples should all print True
console.log(multisum(3) === 3);
console.log(multisum(5) === 8);
console.log(multisum(10) === 33);
console.log(multisum(1000) === 234168);