/* Write a function that takes one integer argument, which may be positive, negative, or zero. 
This method returns true if the number's absolute value is odd. 
You may assume that the argument is a valid integer value. */

const checkAbsOdd = function(nr) {
    if (nr < 0) {
        nr = nr * -1;
    }
    return !(nr % 2 === 0);
}

// test
console.log(checkAbsOdd(-3));
console.log(checkAbsOdd(5));
console.log(checkAbsOdd(4));