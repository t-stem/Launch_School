/*
Write a function that takes a string as an argument and returns true if all parentheses in the string are properly balanced, 
false otherwise. To be properly balanced, parentheses must occur in matching '(' and ')' pairs.
*/

function pairedParentheses(inputString) {
  // console.log('Pairing')
  for (i = 0; i < inputString.length; i += 2) {
    let subString = inputString[i] + inputString[i+1];

    if (subString !== '()') {
      return false;
    }
  }
  return true;
}

/* Test cases pairedParentheses
console.log(pairedParentheses('()'));
console.log(pairedParentheses('()()'));
console.log(pairedParentheses(')('));
console.log(pairedParentheses('()(('));
*/

function isBalanced(inputString) {
  let sanitizedString = inputString.replace(/[^()]/g, "");
  let sanitizedStringLength = sanitizedString.length;
  console.log(sanitizedStringLength)

  if (sanitizedStringLength === 0) {
    return true;
  } else if (sanitizedStringLength % 2 === 1) {
    return false;
  } else {
    return pairedParentheses(sanitizedString);
  }
}

// Test cases isBalanced
console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);