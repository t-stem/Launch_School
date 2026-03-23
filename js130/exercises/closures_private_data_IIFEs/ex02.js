/*
Our earlier implementation of the Function.prototype.bind was simplistic. 
Function.prototype.bind has another trick up its sleeve besides hard-binding functions to context objects. 
It's called partial function application. 
Read this assignment and the MDN documentation to learn more about partial function application.

Alter the myBind function written in the previous exercise to support partial function application of additional arguments to the original function.
*/

function myBind(func, contextObj, ...args1) {
  return function(...args2) { // rest syntax gathers arguments into an array variable called args
    let args = args1.concat(args2);
    return func.apply(contextObj, args); // apply takes an array of args
  }
}

function prod(b) {
  return this.a * b;
}

let nums = {a: 2, b: 3};

function myBind(func, context) {
  return function(...args) {
    return func.apply(context, args);
  }
} 

let multiplyBy = myBind(prod, nums);

console.log(multiplyBy(4)); // 8
