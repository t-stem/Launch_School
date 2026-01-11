/* 
Write a function that takes a string as an argument and returns that string with every
 lowercase letter changed to uppercase and every uppercase letter changed to lowercase. 
 
 Leave all other characters unchanged.

*/

function swapCase(inputString) {
  let newString = '';
  
  for (let char of inputString) {
    newString += (char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase());
  }

  return newString;
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
