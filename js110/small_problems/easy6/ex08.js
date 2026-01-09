/*
Write a function that takes a string argument containing one or more words and returns a new string 
containing the words from the string argument. 

All five-or-more letter words should have their letters in reverse order. 

The string argument will consist of only letters and spaces. Words will be separated by a single space.
*/


/* PEDAC
- split sentence into array of words
- loop through words
- if word length > 5
  * modify array element by reversing the letters in the word
- join elements in the array into string
- return the string
*/


function reverseWords(inputString) {
  let wordsArray = inputString.split(" ");

  for (index = 0; index < wordsArray.length; index += 1) {
    if (wordsArray[index].length >= 5) {
      wordsArray[index] = wordsArray[index]
      .split("")
      .reverse()
      .join("");
    }
  }

  return wordsArray;
}

// Test cases
console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"


