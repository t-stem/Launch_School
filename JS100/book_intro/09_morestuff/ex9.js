//  Without using Object.is, write a function that will return true if the argument is -0, 
// and false if it is 0 or any other number.

function minusZero (number) {
    return 1 / number === -Infinity;
}

console.log(minusZero(1))