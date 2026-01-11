/* 
Modify the function from the previous exercise so it ignores non-alphabetic characters when determining 
whether it should uppercase or lowercase each letter. 

The non-alphabetic characters should still be included in the return value; 
they just don't count when toggling the desired case.
*/

function staggeredCase1(inputString) { // more reliable logic for odd length strings
  let newString = '';
  let upperLower = 1; 
  
  for (let char of inputString) {
    if (char.match(/[^a-z]/i)) {
      newString += char;
    } else if (upperLower === 1) {
      newString += char.toUpperCase();
      upperLower *= -1;
    } else {
      newString += char.toLowerCase();
      upperLower *= -1;
    }
  }

  return newString;
}


function staggeredCase(inputString) { // revised version
  let newString = '';
  let needUpper = true; // changed to boolean for more reliable behavior
  
  for (let currentChar of inputString) {
    if (/[^a-z]/i.test(currentChar)) { // used test, which returns a boolean
      newString += currentChar;
    } else { 
      newString += needUpper ? currentChar.toUpperCase() : currentChar.toLowerCase(); // shortened logic by using ternary operator
      needUpper = !needUpper;
    }
  }
  
  return newString;
}

// test cases
console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);
