/*
Refactor these classes so they all use a common superclass, and inherit behavior as needed.
*/

class Vehicle {
  constructor(make, model, wheels) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }

  getWheels() {
    return this.wheels;
  }

  info() {
  return `${this.make} ${this.model}`;
  }
}

class Car extends Vehicle {
  constructor(make, model) {
    super(make, model, 4);
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model) {
    super(make, model, 2);
  }
}

class Truck extends Vehicle {
  constructor(make, model, payload) {
    super(make, model, 6);
    this.payload = payload;
  }
}

let car = new Car('Toyota', 'Prius');
console.log(car.info());
console.log(car.getWheels());

let truck = new Truck('DAF', "Model50");
console.log(truck.info());
console.log(truck.getWheels());