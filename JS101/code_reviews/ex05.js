/* Write a function that returns an Array that contains every other element of an Array that is passed in as an argument. 
The values in the returned array should be just those values that are in the 1st, 3rd, 5th, 
and so on elements of the argument Array. */

function oddities(the_array) {
  let array_with_nones = [];
  for (let idx = 0; idx < the_array.length; idx++) {
    if (!(idx % 2)) {
      array_with_nones.push(the_array[idx]);
    } else {
      array_with_nones.push(null);
    }
  }

  let final_array = [];
  for (let item of array_with_nones) {
    if (item !== null) {
      final_array.push(item);
    }
  }

  return final_array;
}

/*
Does the solution meet the problem requirements?
- The solution returns the correct ouputs for the test cases specified in the requirements
CORRECTION: - However, when the_array contains null in one of the required elements, the null value won't be pushed to the final_array in the second for loop
- as a result, the code doesn't return the required output under all scenarios

Is the code readable and easy to understand?
- The code is readable and easy to understand, but the logic could be simplified and the naming conventions for JavaScript could be applied correctly (see below)
- CORRECTION: the syntax "index % 2" in the if statement on line 2 could be improved. It returns true if the expression is truthy, but for readability it would be better to make the condition more explicit "index % 2 === 0"


Do variable and function names adhere to JavaScript naming conventions?
- No, the developer used underscores + lower case for variable names rather than camelCase

Are the variable and function names meaningful and precise?
- The variable and function names are meaningful but could be improved, e.g.:
- function oddElements instead of oddities
- inputArray instead of the_array
- outputArray instead of final_array

Is the code formatted correctly and free of syntax errors?
- Yes, the code is free of syntax errors

Is the solution repetitive or overly complex?
- The logic is repetitive and could be simplified
- The function includes two for loops, both of which contain if logic and one of which contains if-else logic
- The first for loop could iterate through the_array using increments of two, starting from index 0, to skip all even elements in the array
- This would eliminate the need for if-else logic in this for loop
- By removing the line that pushes null to array_with_nones and subsequently looping through array_with_nones, the second for loop can also be removed
- The code could then push the required values directly to final_array without an intermediary step

Would it make more sense to use different looping or conditional structures?
- Yes, see above

Would the solution benefit from helper functions?
- Helper functions are not needed here

Consider running the code through ESLint and discussing any issues raised.
- Beyond the lack of camelCase pointed out above, ESlint didn't raise any new issues
*/


console.log(oddities([2, 3, 4, 5, 6]));    // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"]));     // logs ['abc']
console.log(oddities([123]));              // logs [123]
console.log(oddities([]));                 // logs []