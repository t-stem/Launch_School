/*
Write a program that uses this array to create an object where the names are the keys and the values are the positions in the array:
*/

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let result = {}

for (i = 0; i < flintstones.length; i += 1) {
  result[flintstones[i]] = i;
}

console.log(result);

let output = { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }