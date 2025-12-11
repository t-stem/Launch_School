// Consider the following object:

let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

// Create an array from this object that contains only two elements: Barney's name and Barney's number:

[ 'Barney', 2 ]

// own solution
let keys = Object.keys(flintstones);
let values = Object.values(flintstones);
const entry = 2;
let newFlintstones = [keys[entry], values[entry]];
console.log(newFlintstones);

// hint: entries method
let moreFlintstones = Object.entries(flintstones).filter(pair => pair[0] === 'Barney').shift(); // filter executes the callback function for each element in the array and returns a new array with all elements for which the callback function is true 
// this returns a nested array, so the .shift() method removes and returns the first (and in this case only) element in the array
console.log(moreFlintstones); 
