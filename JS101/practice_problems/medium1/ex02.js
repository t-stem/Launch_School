// Starting with the string:

let munstersDescription = "The Munsters are creepy and spooky.";

// Return a new string that swaps the case of all of the letters:

`tHE mUNSTERS ARE CREEPY AND SPOOKY.`;


function convertLong(inputString) {
  let wordsArray = inputString.split(" ");

  // loop through words in array
  wordsArray = wordsArray.map(function(word) {

    // declare newWord
  let newWord = "";

  // loop through chars in word
  for (index = 0; index < word.length; index += 1) {
    let char = word[index];

    // check if char is upper or lower case and swap case accordingly
    char === char.toUpperCase() ? char = char.toLowerCase() : char = char.toUpperCase();

    // add converted char to newWord
    newWord += char;
  }

  // assign the newWord to the word in the array
  return newWord;
  });

  // join array elements into string
  console.log(wordsArray.join(" "));
}


// shorter version
function convertShort(inputString) {
  let charsArray = inputString.split("");

  charsArray = charsArray.map(function(char) {
    return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
  })
  
  console.log(charsArray.join(""));
}

convertLong(munstersDescription);
convertShort(munstersDescription);
