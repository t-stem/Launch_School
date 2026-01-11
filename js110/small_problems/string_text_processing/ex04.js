/*
Write a function that takes a string as an argument and returns that string with the first character of every word 
capitalized and all subsequent characters in lowercase.

You may assume that a word is any sequence of non-whitespace characters.
*/

function wordCap1(inputString) { // this solution colapses multiple white spaces between words into one space
  return inputString
  .split(" ")
  .map(word => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
  .join(" ");
}

function wordCap(inputString) { // this version preserves multiple white spaces
  return inputString.replace(/\S+/g, word => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()) // /\S+/ matches any sequece of non-whitespace chars, where S stands for a non-whitespace char (s stands for a whitespace char)
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'

