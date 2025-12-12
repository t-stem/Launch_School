// Examine the following code carefully. 
// Can you identify all of the variables, primitive values, and objects that exist when this code executes?

let arr = [1, 2, 3];
let newArr = arr;

const num = arr[0];
let newNum = num;

function double(num) {
  return num * 2;
}

double(newNum);

// vars -> arr, newArr, num (const), newNum // CORRECTION: double is also a variable, and the function parameter num is also a variable
// primitives -> 1, 2, 3, 0 // CORRECTION: these are the unique primitives, but some of them are copied. 1, 2, 3, arr[0], 0, newNum, num, num * 2, 2
// ojbects = [1, 2, 3], double
