/*
The method franchise.allMovies is supposed to return the following array:

[
  'How to Train Your Dragon 1',
  'How to Train Your Dragon 2',
  'How to Train Your Dragon 3'
]

Explain why this method will not return the desired object. Try fixing this problem by taking advantage of JavaScript lexical scoping rules.

ANSWER:
The problem is that 'this' is typically used in a method call. In that case it will bind to the object on which the method is called.

In this piece of code, this is used in a callback function, which is not a method that belongs to an object. As a result, 'this' will bind to the global object.

Since the global object doesn't have a 'name' property, the code won't work. 
*/

let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    let self = this; // added this line
    return [1, 2, 3].map(function(number) {
      return self.name + ' ' + number; // changed 'this' to 'self' 
    });
  },
};

console.log(franchise.allMovies());