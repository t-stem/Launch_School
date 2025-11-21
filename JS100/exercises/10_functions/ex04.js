/* Add a property to the below object, jane,
 so that the code on line 13 logs 'Hey, Bobby!' to the console. */

let greeting = function(name) {
    console.log(`Hey, ${name}!`);
}

 let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  // add code here
  greet: greeting
  greet2: (name) => console.log(name), // added alternative
  greet3: function(name) {console.log(name)} // added alternative
};

jane.greet('Bobby'); // Hey, Bobby!

 
