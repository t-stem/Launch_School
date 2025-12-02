/* Using the multiply() function from the "Multiplying Two Numbers" problem, 
write a function that computes the square of its argument 
(the square is the result of multiplying a number by itself). */

function square(arg) {
    if (typeof(arg) !== "number") {
        throw Error("Please enter a number.");
    }
    return arg * arg;
}

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

