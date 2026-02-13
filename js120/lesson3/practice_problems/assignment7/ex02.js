/*
This code presents a number of problems, however. What if we want to add another kind of drill? 
Given what we've learned about object orientation in the previous assignment, how could we use objects to organize these two groups of data?
*/

let scissorsId = 0;
let scissorsName = 'Scissors';
let scissorsStock = 8;
let scissorsPrice = 10;

let drillId = 1;
let drillName = 'Cordless Drill';
let drillStock = 15;
let drillPrice = 45;

function createTool(id, name, stock = 0, price = 0) {
  return {
    id: id,
    name: name,
    stock: stock,
    price: price
  }
}

let scissors = createTool(0, 'Scissors', 8, 10)
let drill = createTool(1, 'Cordless Drill', 15, 45);

function setPrice(tool, newPrice) {
  if (newPrice < 0) {
    console.log('Price must be larger than 0');
  } else {
    tool.price = newPrice;
  }
}