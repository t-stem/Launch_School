// Starting with the string:

let famousWords = "seven years ago...";

// show two different ways to put the expected "Four score and " in front of it.

let addString = "Four score and ";

// option1
let famousWordsNew = addString + famousWords;
console.log(famousWordsNew);

let famousWordsMore = addString.concat(famousWords);
console.log(famousWordsMore);
