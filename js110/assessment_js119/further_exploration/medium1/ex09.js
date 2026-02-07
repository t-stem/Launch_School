/*
Write a function that takes a sentence string as an argument and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

PROBLEM:
- input: sentence string
- returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

EXAMPLES:

DATA STRUCTURE
{numWord: int}
[words]

ALGORITHM:
- Split sentence into words, delimiter = ' '
- SET numWords = keys of {numWord: 'int'}
- Loop through words
  - SET cleanWord = lettersOnly(word)
  - IF cleanword occurs in numWords
      replace cleanWord in word by int

lettersOnly(word)
  SET output = empty string
  Loop through chars in word
    IF currChar is a letter
      add currChar to output
  RETURN output
  
*/

function cleanWord(word) {
  let output = '';
  word.split('').forEach(currChar => {
    currChar = currChar.toLowerCase();
    if (currChar >= 'a' && currChar <= 'z') {
      output += currChar;
    }
  })

  return output;
}

function wordToDigit(sentence) {
  const numWordsObj = {zero: '0', one: '1', two: '2', three: '3', four: '4', five: '5', six: '6', seven: '7', eight: '8', nine: '9'};
  
  let words = sentence.split(' ');

  let numWordsArr = Object.keys(numWordsObj);
  let newWords = words
    .map(word => {
      let cleanedWord = cleanWord(word);
      if (numWordsArr.includes(cleanedWord)) {
        let replacement = numWordsObj[cleanedWord];
        return word.replace(cleanedWord, replacement);
      }
      return word;
    });

  return newWords.join(' ');
}



console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."
