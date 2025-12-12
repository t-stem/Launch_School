/* Write a function that takes a string argument and returns a new string that contains the value 
of the original string with all consecutive duplicate characters collapsed into a single character. */

function crunch(inputString) {
  let splitString = inputString.split("");
  
  return splitString.reduce(function (accumulator, char) {
    if (char === accumulator[accumulator.length - 1]) {
      return accumulator; // IMPORTANT: callback function always has to return something to the previous iteration
    } else {
      return accumulator.concat(char); // IMPORTANT: callback function always has to return something to the previous iteration
    }
  }, "");
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // "" 
