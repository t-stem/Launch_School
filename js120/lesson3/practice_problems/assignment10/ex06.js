/*
Implement the method described in the comments below:
*/

function Ninja() {
  this.swung = false;
}

// Add a swing method to the Ninja prototype which
Ninja.prototype.swing = function() {
  // modifies `swung` and returns the calling object
  this.swung = true;
  return this; 
}

let ninjaA = new Ninja();
let ninjaB = new Ninja();

console.log(ninjaA.swing().swung);      // logs `true`
console.log(ninjaB.swing().swung);      // logs `true`
console.log(ninjaA.swing() === ninjaA);
console.log(ninjaB.swing() === ninjaB);