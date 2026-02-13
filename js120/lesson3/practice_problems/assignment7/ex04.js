/*
We want our code to take an object-oriented approach to keeping track of the products, 
and although the functions we just wrote work fine, since they are manipulating data in the objects, we should place them in the objects themselves. 
Rewrite the code such that the functions describeProduct and setProductPrice become methods describe and setPrice on both our scissors and drill objects.
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
    price: price,

    setPrice(newPrice) {
      if (newPrice < 0) {
        console.log('Price must be larger or equal to 0');
      } else {
        this.price = newPrice;
      }
    },

    describe() {
      console.log(`Name: ${this.name}\nID: ${this.id}\nPrice: $${this.price}\nStock: ${this.stock}`);
    }
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

scissors.setPrice(12);
scissors.describe();
// => Name: Scissors
// => ID: 0
// => Price: $10
// => Stock: 8