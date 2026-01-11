/*
Write a function that takes a string as an argument and returns that string with a staggered capitalization scheme. 

Every other character, starting from the first, should be capitalized and should be followed 
by a lowercase or non-alphabetic character. 

Non-alphabetic characters should not be changed, but should be counted as characters for determining 
when to switch between upper and lower case.
*/

function staggeredCase2(inputString) {
  let stringArray = inputString.split('');
  let penultimateIndex = stringArray.length - 1;

  for (let i = 0; i < penultimateIndex; i += 2) {
    stringArray[i] = stringArray[i].toUpperCase();
    if (stringArray[i]){
      stringArray[i+1] = stringArray[i+1].toLowerCase();
    }
  }

  return stringArray.join('');
}

function staggeredCase(inputString) { // more reliable logic for odd length strings
  let newString = '';
  for (let i = 0; i < inputString.length; i += 1) {
    if (i % 2 === 0) {
      newString += inputString[i].toUpperCase();
    } else {
      newString += inputString[i].toLowerCase();
    }
  }
  return newString;
}

// Test cases
console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"

