/* Create a function that takes two arguments, 
multiplies them together, and returns the result. */

function multiply(arg1, arg2) {
    if (isNaN(arg1) || isNaN(arg2)) {
        throw Error("Please enter two numbers.");
    }
    return arg1 * arg2;
}

console.log(multiply(5, 3) === 15); // logs true