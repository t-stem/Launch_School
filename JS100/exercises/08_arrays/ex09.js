/* Write a function that checks whether or not a particular destination is included within destinations,
without using the built-in method Array.prototype.includes().

For example: When checking whether 'Barcelona' is contained in destinations, 
the expected output is true, whereas the expected output for 'Nashville' is false.
*/

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

const contains = function(city, destinations) {
    if (destinations.indexOf(city) === -1) {return false}
    else {return true}
}


// feedback: more concise alternative
const contains2 = (city, destinations) => destinations.indexOf(city) !== -1; 

console.log(contains2('Barcelona', destinations)); // true
console.log(contains2('Nashville', destinations)); // false