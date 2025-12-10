/* Madlibs is a simple game where you create a story template with "blanks" for words. 
You, or another player, then construct a list of words and place them into the story, 
creating an often silly or funny story as a result.

Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective,
 and injects them into a story that you create.*/

let readlineSync = require('readline-sync');

function madlib() {
    let noun = readlineSync.question('Enter a noun: ');
    let verb = readlineSync.question('Enter a verb: ');
    let adjective = readlineSync.question('Enter an adjective: ');
    let adverb = readlineSync.question('Enter an adjective: ');

    console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
    console.log(`The ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}.`);
    console.log(`The dog ${adverb} ${verb}s up ${adjective} Joe's turtle.`);
}

madlib()

/*
Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly

// console output
Do you walk your blue dog quickly? That's hilarious!
The blue dog walks quickly over the lazy dog.
The dog quickly walks up blue Joe's turtle.
*/
