/*
Write a constructor function that creates objects that represent smartphones. 
Each smartphones should have a brand, model, and release year. 
Add methods to check the battery level and to display the smartphones's information. 

Create objects that represent the following two smartphones:
Brand	Model	Release Year
Apple	iPhone 12	2020
Samsung	Galaxy S21	2021
*/

function Smartphone(brand, model, releaseYear) {
  this.brand = brand;
  this.model = model;
  this.releaseYear = releaseYear;

  this.checkBattery = function() {
    console.log('Checking battery level');
  }

  this.displayInfo = function() {
    console.log(`Brand: ${this.brand}; Model: ${this.model}; Release year: ${this.releaseYear}`);
  }
}

let iPhone12 = new Smartphone('Apple', 'iPhone 12',	2020);
let GalaxyS21 = new Smartphone('Samsung',	'Galaxy S21',	2021);

iPhone12.checkBattery();
GalaxyS21.displayInfo();
console.log(iPhone12);
console.log(GalaxyS21);
