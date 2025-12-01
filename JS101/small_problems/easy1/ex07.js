/* Write a function that takes two strings as arguments, determines the length of the two strings,
and then returns the result of concatenating the shorter string, the longer string, 
and the shorter string once again. You may assume that the strings are of different lengths.
*/

// Write a function that takes two strings as arguments
function shortLongShort(string1, string2) {
    // determine the length of the two strings
    let length1 = string1.length;
    let length2 = string2.length;

    // returns the result of concatenating the shorter string, the longer string, and the shorter string once again
    if (length1 > length2) {
        return string2 + string1 + string2
    }
    else { // this logic works because we can assume that one string is longer than the other
        return string1 + string2 + string1
    }
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"