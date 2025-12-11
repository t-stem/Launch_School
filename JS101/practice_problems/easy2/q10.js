// Write a one-line expression to count the number of lower-case t characters in each of the following strings:

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";


function testT(inputString) {
  return inputString.split(" ").filter(element => element.includes("t")).length;
}

console.log(testT(statement1));
console.log(testT(statement2));