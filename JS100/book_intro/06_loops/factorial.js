let rlSync = require('readline-sync')

let number = Number(rlSync.question("Please enter a number: "))

function factorial3(number, i = 1, n = 1) {
    number = number;
    n = n * i;
    if(i === number) {
        return n;
    }
    i += 1;
    return factorial3(number, i, n);
}
console.log(`${number}! = ${factorial3(number)}`);



function factorial2(number) {
    let n = 1;
    for (let i = 1; i < (number + 1); i += 1) {
        n = n * i;
    }
    return n
}






function check_factorial(number) { 
    if (number < 0) {
        console.log("Error: number must be positive.");
        return;
    } 
    if (number % 1 > 0) {
        console.log("Error: number must an integer.");
        return;
    } 
    if (number === 0 || number === 1) {
        console.log("Factorial = 1");
        return;
    }
    else {
        return number;
    } 
}

// function factorial(number) {
//    if (number === 1) {
//        return 1;
//    }
//    output = number * factorial(number - 1);
//    console.log(`Factorial = ${output}`);
//    return output;
// }

