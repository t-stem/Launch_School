/*
This exercise re-examines exercise 2 from the previous chapter. In that exercise, you wrote an object factory to instantiate objects that represent smartphones. In this exercise, we'll rewrite that factory using a class.

Write a class that can be used to instantiate objects that represent smartphones. Each smartphone should have a brand, model, and release year. Add methods to check the battery level and to display the smartphone's information. Create objects that represent the following 2 smartphones:
*/

// Your code goes here
class Smartphone {
  constructor (brand, model, releaseYear) {
    this.brand = brand;
    this.model = model;
    this.releaseYear = releaseYear;
  }
  
  checkBattery() {
    console.log(`This ${this.model} has 50% battery left.`)
  }
  displayInfo() {
    console.log(`This ${this.brand} ${this.model} was released in ${this.releaseYear}.`)
  }
}

let iPhone = new Smartphone('Apple', 'iPhone 12', 2020);
let galaxy = new Smartphone('Samsung', 'Galaxy S21', 2021);

iPhone.checkBattery();
galaxy.displayInfo();