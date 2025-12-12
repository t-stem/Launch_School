/* Write a function that returns the next to last word in the String passed to it as an argument.

Words are any sequence of non-blank characters.

You may assume that the input String will always contain at least two words.

*/
function penultimate(inputString) {
  let cleanString = inputString.replace(/\s+/g, " "); // use global flag to match all occurances of the regex
  let splitString = cleanString.split(" ");
  console.log(cleanString);
  return splitString[splitString.length - 2];
}



console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
console.log(penultimate("i am  going    home"));