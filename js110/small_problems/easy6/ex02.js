/*
Write a function that takes a string, doubles every consonant character in the string, 
and returns the result as a new string. 

The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.
*/

function doubleConsonants(inputString) {
  const CONSONANTS = 'bcdfghjklmnpqrstvwxyz';

  let newString = '';

  for (let char of inputString) {
    if (CONSONANTS.includes(char.toLowerCase())) {
      newString += char.repeat(2);
    } else {
      newString += char;
    }
  }

  return newString;
}


console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""