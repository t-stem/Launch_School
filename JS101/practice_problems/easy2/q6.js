// Suppose we build an array like this:

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

//This code will create a nested array that looks like this:
["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// Nesting data structures like we do here is commonplace in JavaScript and programming in general. 
// We'll explore this in much greater depth in a future Lesson.

// Create a new array that contains all of the above values, but in an un-nested format:
[ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]

// own solution
console.log(flintstones);
let newFlintstones = flintstones.slice(0, 2).concat(flintstones[2], flintstones[3]);
console.log(newFlintstones);

// usint hint: spread syntax
let moreFlintstones = [].concat(...flintstones);
console.log(moreFlintstones);

// using hint: .reduce()
let finalFlintstones = flintstones.reduce((finalFlintstones, element) => finalFlintstones.concat(element), []); // need to specify initila value
console.log(finalFlintstones);

// using hint: .forEach()
let uberFlintstones = [];
flintstones.forEach(element => uberFlintstones = uberFlintstones.concat(element)); // callback function needs to state "uberFlintstones = " since the return value from .concat() needs to be stored somewhere
console.log(uberFlintstones);

