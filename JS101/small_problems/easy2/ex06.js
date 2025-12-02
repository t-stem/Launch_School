/* Write a function that returns the next to last word in the String passed to it as an argument.

Words are any sequence of non-blank characters.

You may assume that the input String will always contain at least two words.

*/

function penultimate(stringArg) {
    let stringArray = stringArg.split(/\s+/); // correction: changed split parameter to regex /\s+/ where \s reference to a blank character and + refers to 1 or more occurances of this character 
    return stringArray[stringArray.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
console.log(penultimate("i am  going    home"));