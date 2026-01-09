/*
Write a function that takes a string argument consisting of a first name, a space, and a last name, 
and returns a new string consisting of the last name, a comma, a space, and the first name.
*/

function swapName(inputName) {
  let spaceIndex = inputName.indexOf(" ");
  return inputName.slice(spaceIndex + 1) + ', ' + inputName.slice(0, spaceIndex);
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"