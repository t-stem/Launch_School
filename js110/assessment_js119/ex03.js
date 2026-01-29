/*
Create a function that takes a string argument and returns a copy of the string with every second character 
in every third word converted to uppercase. 

Other characters should remain the same.

PROBLEM:
- input: string argument
- output: copy of the string with every second character in every third word converted to uppercase. 

Explicit rules:
- Other characters should remain the same.

Implicit rules

Questions:
- Empty string returns empty string?
  ?
- If words are shorter than 2 chars?
  don't change word
- Words separated by spaces?
  assume yes
- 

EXAMPLES

DATA STRUCTURES
- strings
- arrays

ALGORITHM
- Split string into wordsArray
- Trim the words

- Loop through array of words in increments of 3
  * Capitalize every third word
  * Replace currentValue with capitalizedWord

Return outputArray
*/

function cleanWordsArray(inputString) {
  const alphabet = `abcdefghijklmnopqrstuvwxyz`
  
  return inputString
    .split(" ")
    .map(word => word.trim());
}

function capitalizeWeird(inputWord) {
  return inputWord
    .split('')
    .map((char, index) => {
      if ((index + 1) % 2 === 0) {
        return char.toUpperCase();
      }

      return char;
    })
    .join('');
}

function toWeirdCase(inputString) {
  let wordsArray = cleanWordsArray(inputString);
  
  let newArray = wordsArray.map((word, index) => {
    if ((index + 1) % 3 === 0) {
      return capitalizeWeird(word);
    }

    return word;
  });
  
  return (newArray.join(' '));
}


function p(arg) {
  console.log(arg);
}

let original = 'Lorem Ipsum is simply dummy text of the printing world';
let expected = 'Lorem Ipsum iS simply dummy tExT of the pRiNtInG world';
p(toWeirdCase(original) === expected);

original = 'It is a long established fact that a reader will be distracted';
expected = 'It is a long established fAcT that a rEaDeR will be dIsTrAcTeD';
p(toWeirdCase(original) === expected);

p(toWeirdCase('aaA bB c') === 'aaA bB c');

original = "Mary Poppins' favorite word is " +
           "supercalifragilisticexpialidocious";
expected = "Mary Poppins' fAvOrItE word is " +
           "sUpErCaLiFrAgIlIsTiCeXpIaLiDoCiOuS"
p(toWeirdCase(original) === expected);