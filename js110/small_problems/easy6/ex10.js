/* revise 
Write a function that takes a string as an argument and returns true if all parentheses in the string are properly balanced, 
false otherwise. To be properly balanced, parentheses must occur in matching '(' and ')' pairs.

*/

function pairedParentheses2(inputString) { // DEPRECATED: this function doesn't return the required result
  let openCounter = 0;
  let closeCounter = 0;
  let index = 0;

  while (index < inputString.length) {
    openCounter = 0;
    closeCounter = 0;

    while (inputString[index] === "(") {
      openCounter += 1;
      index += 1;
    }
  
    while (inputString[index] === ')') {
      closeCounter += 1;
      index += 1;
    }

    if (openCounter !== closeCounter) {
      return false;
    }
  }
  
  return openCounter === closeCounter;
}

/* 
Learning points:
You reset openCounter and closeCounter to 0 on every outer loop iteration, so you’re only comparing runs/groups of consecutive ( and ), not the whole string.
Even if fixed, this approach doesn’t handle nested patterns like "(())", where the notion of “groups” doesn’t directly match balanced structure.
*/

function pairedParentheses3(inputString) { // DEPRECATED: this function doesn't return the desired result
  const OPEN = '(';
  const CLOSE = ')';
  let newString = inputString;

  while (newString.length > 0) {
    let firstOpen = newString.indexOf(OPEN);
    let lastOpen = newString.lastIndexOf(OPEN);
    let firstClose = newString.indexOf(CLOSE);
    let lastClose = newString.lastIndexOf(CLOSE);

    if ((firstOpen === -1 || firstClose === -1) && (firstOpen !== firstClose)) {
      return false;
    } else if (firstOpen > firstClose || lastOpen > lastClose) {
      return false;
    }

    newString = inputString.slice(firstOpen + 1, lastClose);
  }
  
  return true;
}

/* Learning points:
ou were trying to reason with indexOf / lastIndexOf to shrink the string from the outside in, which is an interesting idea. A couple of issues:

newString never actually changes based on itself; you do newString = inputString.slice(...) instead of newString = newString.slice(...). That means you’ll always slice the original string, so the loop doesn’t really progress as intended.
The logic around first/last open/close is quite hard to reason about and doesn’t map as directly to “balanced” as the counter method.
*/

function pairedParentheses(inputString) {
  let balancedCounter = 0;
  
  for (let char of inputString) {
    if (char === '(') {
      balancedCounter += 1;

    } else if (char === ')') {
      balancedCounter -= 1;
    }

    if (balancedCounter < 0) {
      return false;
    }
  }
  return balancedCounter === 0;

}

/* Test cases pairedParentheses
console.log(pairedParentheses('()')); // true
console.log(pairedParentheses('()()')); // true
console.log(pairedParentheses('(())')); // true
console.log(pairedParentheses('()(())')); // true
console.log(pairedParentheses('()(()')); // false
console.log(pairedParentheses(')(')); // false
console.log(pairedParentheses('()((')); // false
console.log(pairedParentheses('(()())')); // true
*/

function isBalanced(inputString) {
  let sanitizedString = inputString.replace(/[^()]/g, "");
  let sanitizedStringLength = sanitizedString.length;

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
