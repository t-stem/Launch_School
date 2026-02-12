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

Vehicle.prototype.accelerate = function() {
  console.log('Accelerating...');
},

Vehicle.prototype.decelerate = function() {
  console.log('Decelerating...');
}

function Plane(color, weight, airline) {
  Vehicle.call(this, color, weight);
  this.airline = airline;
}

Plane.prototype = Object.create(Vehicle.prototype)

Plane.prototype.takeOff = function() {
    console.log('Taking off...');
  }

Plane.prototype.land = function() {
    console.log('Landing...');
  }

Plane.prototype.constructor = Plane;

function Car(color, weight) {
  Vehicle.call(this, color, weight);
}

Car.prototype = Object.create(Vehicle.prototype)

Car.prototype.honk = function() {
    console.log('Honking...');
}

Car.prototype.constructor = Car;

function Boat(color, weight, homePort) {
  Vehicle.call(this, color, weight);
  this.homePort = homePort;
}

Boat.prototype = Object.create(Vehicle.prototype)

Boat.prototype.dropAnchor = function() {
    console.log('Dropping anchor...');
}

Boat.prototype.constructor = Boat;

let plane = new Plane('Blue', 1000, 'KLM');
let car = new Car('Black', 100);
let boat = new Boat('Navy', 10000, 'Singapore');

plane.takeOff()
console.log(plane.color);
plane.accelerate()
car.honk();
console.log(car.weight);
boat.dropAnchor();
console.log(boat.color);
boat.decelerate();
