/*
Rewrite these two object types to use the class keyword, instead of direct prototype manipulation. 
Person exposes method greeting which when called logs the provided greeting text. 
Shouter is a subtype of Person and is a bit loud so whatever he says is uppercased.
*/

class Person {
  greeting(text) {
    console.log(text);
  }
}

class Shouter extends Person {

  greeting(text) {
    super.greeting(text.toUpperCase()); // INCORRECT: console.log(super.greeting(text).toUpperCase());
  }
}

/*

function Person() { // constructor function
}
Person.prototype.greeting = function(text) { // adds greeting method to the prototype object of the Person constructor
  console.log(text);
}

function Shouter() { // constructor function
  Person.call(this); // calls the Person constructor and sets this to the Shouter instance
}
Shouter.prototype = Object.create(Person.prototype) // Creates an object based on the person prototype and assigns it to the Shouter prototype, which will inherit the properties of Person
Shouter.prototype.greeting = function(text) { // Overwrites the greeting method in the Shouter prototype (which was inherited from person) with the greeting method from Person in which 'this' refers to the Shouter instance and passess in the uppercase version of 'text' as an argument
  Person.prototype.greeting.call(this, text.toUpperCase());
}

*/

let person = new Person(); // creates a new instance of Person and assigns it to the 'person' variable
let shouter = new Shouter(); // creates a new instance of Shouter and assigns it to the 'shouter' variable

person.greeting("Hello. It's very nice to meet you."); // Hello. It's very nice to meet you
shouter.greeting("Hello my friend."); // HELLO MY FRIEND.

// last two lines call the greeting methods on the person and shouter instances. 