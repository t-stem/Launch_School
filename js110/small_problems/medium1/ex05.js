/*
Write a function that takes a sentence string as an argument and returns that string with every occurrence of 
a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.
*/

function wordToDigit(inputString) {
  const numberStrings = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  return inputString
  .split(" ")
  .map(word => {
    if (numberStrings.includes(word)) {
      return numberStrings.indexOf(word);
    } else {
      return word;
    }
  })
  .join(" ");
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."