/* Build a program that randomly generates Teddy's age, and logs it to the console. 
Have the age be a random number between 20 and 120 (inclusive).
*/
let randomNumber = Math.floor(Math.random() * (120 - 20 + 1) + 20); // correction: changed to 120 - 20 + 1, since Math.random returns a random float between 0 (inclusive) and 1 (exclusive), so Math.floor will aways round down the highest possible number to 119 without adding + 1

console.log(`Teddy is ${randomNumber} years old!`);



// Teddy is 69 years old!