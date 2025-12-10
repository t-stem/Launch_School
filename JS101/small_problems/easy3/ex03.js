/* Write a function that takes one argument, a positive integer, 
and returns a string of alternating '1's and '0's, always starting with a '1'. 
The length of the string should match the given integer. */

function stringy(integer) {
    let outputString = "";
    for(let i = 0; i < integer; i += 1) {
        if (i % 2 === 0) {
            outputString += '1';
        } else {
            outputString += '0';
        }
    }
    return outputString;
}


console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"