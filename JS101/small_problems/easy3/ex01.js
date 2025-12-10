/* Write a function that takes a string argument and returns a new string that contains the value 
of the original string with all consecutive duplicate characters collapsed into a single character. */

function crunch(inputWord) {
    let chars = inputWord.split("");
    let previousChar;
    let deduplicatedWord = chars.reduce(function(accumulator, char) {
        if (previousChar === char) {
            previousChar = char;
            return accumulator; // Note: callback function in .reduce() method must have a return value, which is used as the accumulator in the next iteration. Arrow functions implicitly return a value
        } else {
            previousChar = char;
            return accumulator + char;
        }
    }, "")
   return deduplicatedWord;
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""