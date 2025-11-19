let array = [3, 5, 7];
function sumOfSquares(array) {
    return array.reduce((accumulator, element) => accumulator + (element * element), 0); //when a function's only purpose is to calculate a value and immediately return it, you can often make the code a little more direct by returning the result of the expression without storing it in a variable first
};

console.log(sumOfSquares(array)); // => 83