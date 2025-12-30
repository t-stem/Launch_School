/*
Write a function that takes a question as a string argument. The function should:

-Display the string passed as an argument.
- Get the user's input as a string.
If the input is y or yes:
- Print Here we go again!
Go back to where the function was called.
If the input is n or no:
- Print Okay. See you later.
Go back to where the function was called.
If the input is not one of the expected answers:
- Print You goofed! That is not a valid answer.
Go back to step 1.
Additional Rules

!! The function should work with both uppercase and lowercase inputs, as well as mixed case.
The function should trim any leading or trailing whitespace from the input before checking its value.
*/

const readlineSync = require('readline-sync');

function yesNoResponse(question) {
    while (true) {
        console.log(question);
        let answer = readlineSync.question();

        if (answer === 'y' || answer === 'yes') {
            console.log('Here we go again!');
            return;
        } else if (answer === 'n' || answer === 'no') {
            console.log('Okay. See you later.');
            return;
        } else {
            console.log('You goofed! That is not a valid answer.');
        }
    }
}

/*
Does the solution meet the problem requirements?
- No, the solution only works with lower case inputs whereas it should work with upper and mixed case inputs as well. Calling the .toLowerCase() method on the answer variable before the if-else logic could resolve this issue
- The solution also doesn't remove white spaces from user inputs. This could be resolved by calling the trim() method on the answer variable before the if-else logic

Is the code readable and easy to understand?
- Yes, the code is readable and easy to understand, but could benefit from empty lines (e.g. after if and else blocks)

Do variable and function names adhere to JavaScript naming conventions?
- None of the variable and function names violate JavaScript naming conventions

Are the variable and function names meaningful and precise?
- the variable and function names are clear and meaningful

Is the code formatted correctly and free of syntax errors?
- Yes, the code is formatted correctly
- There are no syntax errors

Is the solution repetitive or overly complex?
- The solution is not overly complex


Would it make more sense to use different looping or conditional structures?
- The conditional structure is appropriate since it addresses all three cases (affirmative answer, negative answer, unexpected answer)

Would the solution benefit from helper functions?
- the logic that evaluates whether the answer is either y or yes, or n or no, could be extracted into a helper function
- That way, the yesNoResponse function would have a single, clear purpose rather than muddling different purposes in one function


Consider running the code through ESLint and discussing any issues raised.
- ESlint only flagged indentation as a issue. It seems like the person who wrote the code had set indentation in their code editor to 4 spaces rather than 2

*/