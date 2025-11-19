let rlSync = require('readline-sync');

let age = Number(rlSync.question("What is your age? "));


console.log(`You are ${age} years old.`); 

for (let i = 1; i < 5; i += 1) {
    console.log(`In ${i * 10} years, you will be ${age + i * 10} years old.`); 
}



