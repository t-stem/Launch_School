/*
The code below is expected to output the following when run:
*/

let helloVictor = createGreeter('Victor');
helloVictor.greet('morning'); // 'Good Morning Victor'

/*
However, it instead results in an error. What is the problem with the code? Why isn't it producing the expected results?
*/

function createGreeter(name) {
  return {
    name: name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet: function(timeOfDay) {
      let msg = '';
      switch (timeOfDay) {
        case 'morning':
          msg += `${this.morning} ${name}`; // morning, afternoon and evening are not variables, they are keys of an object ('this' object, i.e. the object that greet() is part of). 'name' is a variable scoped to the entire createGreeter() function and its inner scopes, so it is availble in greet(). 
          break;
        case 'afternoon':
          msg += `${this.afternoon} ${name}`; // for consistency, it would be accurate to use this.name as well instead of name (which will refer to the 'name' property of the object rather than the 'name; variable in createGreeter('))
          break;
        case 'evening':
          msg += `${this.evening} ${name}`;
          break;
      }

      console.log(msg);
    },
  };
}