/*
Create a function that takes two strings as arguments and returns true if some portion of the characters 
in the first string can be rearranged to match the characters in the second. 

Otherwise, the function should return false.

You may assume that both string arguments only contain lowercase alphabetic characters. 

Neither string will be empty.

PROBLEM:
- input: two strings
- output: 
  * true if some portion of the characters in the first string can be rearranged to match the characters in the second
  * Otherwise, the function should return false.

Explicit rules:
- You may assume that both string arguments only contain lowercase alphabetic characters. 
- Neither string will be empty.

REPHRASE:
- does string1 contain all the chars that are present in string2

EXAMPLES:

DATA STRUCTURES:
- [chars in string1]

ALGORITHM:
- LOOP through the chars in string2
- IF char exists in string1Array
    Remove char from string1Array
  ELSE
    RETURN false
  RETURN true
*/

function unscramble(string1, string2) {
  let array1 = string1.split('');

  for (let currentChar of string2) {
    let index = array1.indexOf(currentChar);
    if (index > -1) {
      array1.splice(index, 1);
    } else {
      return false
    }
  }

  return true;
}


const p = console.log;
p(unscramble('ansucchlohlo', 'launchschool') === true);
p(unscramble('phyarunstole', 'pythonrules') === true);
p(unscramble('phyarunstola', 'pythonrules') === false);
p(unscramble('boldface', 'coal') === true);