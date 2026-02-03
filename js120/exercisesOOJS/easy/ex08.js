/*
You have the following classes.
*/


const walkMixin = {
  walk() {
    return `${this.name} ${this.gait()} forward`;
  }
}

class Person {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "strolls";
  }
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "saunters";
  }
}

class Cheetah {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "runs";
  }
}

Object.assign(Person.prototype, walkMixin);
Object.assign(Cat.prototype, walkMixin);
Object.assign(Cheetah.prototype, walkMixin);

/*
class Creature {
  constructor(name) {
    this.name = name;
  }

  walk() {
    return `${this.name} ${this.gait()} forward`;
  }
}

class Person extends Creature {

  gait() {
    return "strolls";
  }
}

class Cat extends Creature {

  gait() {
    return "saunters";
  }
}

class Cheetah extends Creature {

  gait() {
    return "runs";
  }
}

*/

/*
You need to modify the code so that this works:
You are only allowed to write one new method to do this
*/

let mike = new Person("Mike");
console.log(mike.walk());
// "Mike strolls forward"

let kitty = new Cat("Kitty");
console.log(kitty.walk());
// "Kitty saunters forward"

let flash = new Cheetah("Flash");
console.log(flash.walk());
// "Flash runs forward"