/* Using the multiply() function from the "Multiplying Two Numbers" problem, 
write a function that computes the square of its argument 
(the square is the result of multiplying a number by itself). */

function multiply(arg1, arg2) {
    if (isNaN(arg1) || isNaN(arg2)) {
        throw Error("Please enter two numbers.");
    }
    return arg1 * arg2;
}

function square(arg) {
    return multiply(arg, arg);
}

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

