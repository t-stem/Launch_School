let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array) {
    let mappedArray = array.map(element => element.length); // use let to declare variables, otherwise they will have global scope by default
    let filteredArray = mappedArray.filter(element => element % 2 !== 0); // use let to declare variables
    return filteredArray
}

console.log(oddLengths(arr)); // => [1, 5, 3]