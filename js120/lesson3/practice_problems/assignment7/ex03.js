/*
It would also be useful to have the ability to output descriptions of our product objects. Implement such a function following the example below:
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

function describeProduct(tool) {
  console.log(`Name: ${tool.name}\nID: ${tool.id}\nPrice: $${tool.price}\nStock: ${tool.stock}`);
}

describeProduct(scissors);
// => Name: Scissors
// => ID: 0
// => Price: $10
// => Stock: 8