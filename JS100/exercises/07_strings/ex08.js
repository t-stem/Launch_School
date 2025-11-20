/* Change your isBlank function from the previous exercise to return true if the string is empty or only contains whitespace. For example:  */

function isBlank (str) {
    return str.trim().length === 0;
}


console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // true
console.log(isBlank(''));     // true