/* Implement a function repeat that repeats an input string a given number of times, as
 shown in the example below; 
without using the pre-defined string method String.prototype.repeat(). 
*/

let repeat = (reps, text) => {
    let repString = "";
    for (let counter = 0; counter < reps; counter += 1) {
        repString = repString + text;
    }
    console.log(repString);
}

repeat(3, 'ha'); // 'hahaha'