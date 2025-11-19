let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function hasThree(array) { 
    return array.includes(3) // includes method returns either true or false
}

hasThree(numbers1);
hasThree(numbers2);
hasThree(numbers3);

// function checkForThree(array) {
//    if (array.includes(3)) {
//        console.log(`"${array} contains 3.`)
//    }
//    else {console.log(`${array} doesn't contain 3.`)}
// }
    

