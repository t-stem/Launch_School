/* 
Write a function that takes a string as an argument and returns true if all parentheses in the string are properly balanced, 
false otherwise. To be properly balanced, parentheses must occur in matching '(' and ')' pairs.

PROBLEM:
Inputs: string
Output: returns true if all parentheses in the string are properly balanced, false otherwise

Explicit rules:
- To be properly balanced, parentheses must occur in matching '(' and ')' pairs.

EXAMPLES: 

DATA STRUCTURES:
- [opening brackets]

ALGORITHM:
- SET openingQueue = []
- Loop through chars of str
  - IF char is opening bracket
    Add char to openingQueue
  - IF char is closing bracket
      IF there's a matching opening bracket in openingQueue
        Remove bracket from openingQueue
      ELSE
        RETURN false
- IF there are brackets left in openingQueue
    RETURN false
- RETURN true
*/

function isBalanced2(str) {
  let openingQueue = [];

  for (let currChar of str) {
    if (currChar === '(') {
      openingQueue.push(currChar);
    }

    if (currChar === ')' && openingQueue.pop() !== '(') return false;
  }

  if (openingQueue.length > 0) return false;

  return true;
}

function isBalanced(str) {
  let balanced = 0;
  
  for (let currChar of str) {
    switch (currChar) {
      case '(':
        balanced += 1;
        break;
      case ')':
        balanced -= 1;
        break;
    }
    
    if (balanced === -1) return false;
  }

  return balanced === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);