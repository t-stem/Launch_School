/*
This exercise re-examines exercise 3 from the previous chapter. 

In that exercise, you wrote a class hierarchy to represent vehicles of various types. 
In this exercise, we'll rewrite that solution using the constructor/prototype pattern.

Using the constructor/prototype pattern, create some types that represent vehicles, 
including cars, boats, and planes as specific kinds of vehicles. 

All vehicles should be able to accelerate and decelerate. Cars should be able to honk, boats should be able to drop anchor, and planes should be able to take off and land. Test your code.
*/

function Vehicle(color, weight) {
  this.color = color;
  this.weight = weight;
}

Vehicle.prototype = {
  accelerate() {
    console.log('Accelerating...');
    console.log('Decelerating...');
  }
}

function Plane(color, weight, airline) {
  Vehicle.call(this, color, weight);
  this.airline = airline;
}

Plane.prototype = {
  takeOff() {
    console.log('Taking off...');
  },

  land() {
    console.log('Landing...');
  }
}

function Car(color, weight) {
  Vehicle.call(this, color, weight);
}

Car.prototype = {
  honk() {
    console.log('Honking...');
  }
}

function Boat(color, weight, homePort) {
  Vehicle.call(this, color, weight);
  this.homePort = homePort;
}

Boat.prototype = {
  dropAnchor() {
    console.log('Dropping anchor...');
  }
}

let plane = new Plane('Blue', 1000, 'KLM');
let car = new Car('Black', 100);
let boat = new Boat('Navy', 10000, 'Singapore');

plane.takeOff()
console.log(plane.color);
car.honk();
console.log(car.weight);
boat.dropAnchor();
console.log(boat.color);

