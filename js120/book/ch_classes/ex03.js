/*
Create a class hierarchy consisting of vehicles, including cars, boats, and planes, as specific kinds of vehicles. 
All vehicles should be able to accelerate and decelerate. 
Cars should be able to honk, boats should be able to drop anchor, and planes should be able to take off and land. 
Test your code.

All vehicles should have a color and weight. Cars have a license number, boats have a home port, and planes have an airline name.
*/

class Vehicle {
  constructor (color, weight) {
    this.color = color;
    this.weight = weight
  }
  
  accelerate() {
    console.log('Accelerating...');
  }
  decelerate() {
    console.log('Decelerating...');
  }
}

class Plane extends Vehicle {
  constructor(color, weight, airlineName) {
    super(color, weight);
    this.airline = airlineName;
  }

  takeOff() {
    console.log('Taking off...');
  }

  land() {
    console.log('Landing...');
  }
}

class Car extends Vehicle{
  constructor(color, weight, licenseNumber) {
    super(color, weight);
    this.licenseNumber = licenseNumber;
  }

  honk() {
    console.log('Honking...');
  }
}

class Boat extends Vehicle {
  constructor(color, weight, homePort) {
  super(color, weight);
  this.homePort = homePort;
  }

  dropAnchor() {
    console.log('Dropping anchor...')
  }
}

let plane = new Plane('blue', 1000, 'KLM');
let car = new Car('black', 100, 'ABC123');
let boat = new Boat('navy', 10000, 'New York');

console.log(car instanceof Vehicle);
console.log(boat instanceof Vehicle);
console.log(car instanceof Car);
console.log(boat instanceof Car);