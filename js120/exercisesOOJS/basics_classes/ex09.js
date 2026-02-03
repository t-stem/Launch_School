/*
Modify the following code so that Hello! I'm a cat! is logged when Cat.genericGreeting is invoked.
*/

let catPrototype = {
  genericGreeting: function() {console.log(`Hello, I'm a cat!`)}
}

class Cat {
  
}

Object.assign(Cat, catPrototype);

Cat.genericGreeting();

