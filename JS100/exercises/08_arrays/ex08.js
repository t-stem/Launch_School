/* How can you check whether a variable holds a value that is an array? 
For example, imagine you start writing a function and want to check whether its argument is an array: */

function filter(input) {
  // Is input an array?
  return Array.isArray(input);
}

array = {}

console.log(filter(array));