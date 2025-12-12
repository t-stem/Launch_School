/* 
Write a function that takes a non-empty string argument and returns the middle character(s)
 of the string. If the string has an odd length, you should return exactly one character. 
 If the string has an even length, you should return exactly two characters.

*/ 


function centerOf (inputString) {
  const LENGTH = inputString.length;
  const MID_LENGTH = LENGTH / 2; // integer for even length, decimal for odd length
  return LENGTH % 2 === 0 ? inputString[MID_LENGTH - 1] + inputString[MID_LENGTH] : inputString[Math.floor(MID_LENGTH)]; 
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"