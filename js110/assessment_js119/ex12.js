/*
Create a function that takes a string as an argument and returns true if the string is a pangram, false if it is not.

Pangrams are sentences that contain every letter of the alphabet at least once. 
For example, the sentence "Five quacking zephyrs jolt my wax bed." is a pangram since it uses every letter at least once.
 Note that case is irrelevant.

PROBLEM:
-Input: string as an argument
- Output: boolean. returns true if the string is a pangram, false if it is not

Explicit rules: 
- Pangrams are sentences that contain every letter of the alphabet at least once. 
-  Note that case is irrelevant.

EXAMPLES:

DATA STRUCTURES:
- {letter: count}
- 'letters in alphabet'
- ['letters in alphabet]'

ALGORITHM: 
1) SET alphabet = array with all letters in alphabet
2) LOOP through every char inputString
  - IF alphabet contains currentChar
  - Remove char from alphabet
    IF alphabet is empty 
      RETURN true


Alternative:
LOOP through chars in inputString
  Update count in object tally accordingly

LOOP through the keys of tally
  IF all letters of alphabet are included in keys
    RETURN true

*/

function isPangram(inputString) {
  const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
  const ALPHABET = alphabetString.split('');

  for (let currentChar of inputString) {
    if (ALPHABET.includes(currentChar)) {
      let index = ALPHABET.indexOf(currentChar);
      ALPHABET.splice(index, 1);
    }

    if (ALPHABET.length === 0) return true
  }

  return false;
}


const p = console.log;
p(isPangram('The quick, brown fox jumps over the lazy dog!') === true);
p(isPangram('The slow, brown fox jumps over the lazy dog!') === false);
p(isPangram("A wizard’s job is to vex chumps quickly in fog.") === true);
p(isPangram("A wizard’s task is to vex chumps quickly in fog.") === false);
p(isPangram("A wizard’s job is to vex chumps quickly in golf.") === true);

let myStr = 'Sixty zippers were quickly picked from the woven jute bag.';
p(isPangram(myStr) === true);