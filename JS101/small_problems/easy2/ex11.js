/* 
Write a function that takes a non-empty string argument and returns the middle character(s)
 of the string. If the string has an odd length, you should return exactly one character. 
 If the string has an even length, you should return exactly two characters.

*/ 

function centerOf (phrase) {
    if (typeof(phrase) !== 'string' || phrase === '') {
        throw Error("Please enter a non-empty string.");
    }

    const PHRASE_MIDDLE = phrase.length / 2;
    if (phrase.length % 2 === 0) {
        return phrase[PHRASE_MIDDLE - 1] + phrase[PHRASE_MIDDLE];
    } else {
        return phrase[Math.floor(PHRASE_MIDDLE)]
    }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"