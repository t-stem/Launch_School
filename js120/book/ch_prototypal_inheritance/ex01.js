/*
This exercise re-examines exercise 1 from the previous chapter. In that exercise, you wrote a class to instantiate smartphone objects. 

In this exercise, we'll rewrite that solution using the constructor/prototype pattern.

Using the constructor/prototype pattern, create a type that represents smartphones. 
Each smartphone should have a brand, model, and release year. 
Add methods that display the smartphone's information and check its battery level. 

Create objects that represent the following two smartphones:
*/

function Smartphone(brand, model, releaseYear) {
  this.brand = brand;
  this.model = model;
  this.releaseYear = releaseYear;
}

Smartphone.prototype.displayInfo = function() {
  console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.releaseYear}`);
}

Smartphone.prototype.checkBattery = function() {
  console.log(`This ${this.model}'s battery level is 75%.`);
}


let iPhone = new Smartphone('Apple', 'iPhone 12', 2020);
let galaxy = new Smartphone('Samsung', 'Galaxy S21', 2021);

iPhone.displayInfo();
galaxy.checkBattery();

