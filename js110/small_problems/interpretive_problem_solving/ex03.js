/*
This limits the words you can spell with the blocks to only those words that do not use 
both letters from any given block. You can also only use each block once.

Write a function that takes a word string as an argument and 
returns true if the word can be spelled using the set of blocks, false otherwise. 

You can consider the letters to be case-insensitive when you apply the rules.

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

*/

function isBlockWord2(word) {
  let blockAvailable = {
    'B:O': true,
    'X:K': true,
    'D:Q': true,
    'C:P': true,
    'N:A': true,
    'G:T': true,
    'R:E': true,
    'F:S': true,
    'J:W': true,
    'H:U': true,
    'V:I': true,
    'L:Y': true,
    'Z:M': true
  }

  let chars = word.toUpperCase().split('');

  for (let char of chars) {
    for (let block in blockAvailable) {
      if (block.includes(char)) {
        if (blockAvailable[block]) {
          blockAvailable[block] = false;
        } else {
          return false;
        } 
      }
    }
  }
  return true;
}

function isBlockWord(word) {
  let blocks = ['B:O', 'X:K', 'D:Q', 'C:P', 'N:A', 'G:T', 'R:E', 'F:S', 'J:W', 'H:U', 'V:I', 'L:Y', 'Z:M']

  let chars = word.toUpperCase().split('');

  for (let char of chars) {
    let matchingBlock = blocks.reduce((match, currentBlock) => {
      if (currentBlock.includes(char)) {
        return match + currentBlock; 
      }
      return match; // a callback function must always have a return value
    }, '');

    if (!matchingBlock) return false;

    let matchingBlockIndex = blocks.indexOf(matchingBlock);
    blocks.splice(matchingBlockIndex, 1);
  }

  return true;
}


console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true