/* Below is a simple object representing our dog, Fido. 
On lines 8 and 9, write code to add properties 'age' and 'favorite food' to the fido object. */

let fido = {
  name: 'Fido',
  species: 'Labrador Retriever',
  color: 'brown',
  weight: 16,
};

// Add property 'age'.
fido.age = 11;

// Add property 'favorite food'.
fido['favorite food'] = 'dog food';

console.log(fido);