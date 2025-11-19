let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array) {
    return array.reduce((accumulator, element) => { // arrow function syntax: (var1, var2) => expression
        if (element.length % 2 !== 0) {
            accumulator.push(element.length)
            }
            return accumulator // the callback function must return a return value to the reduce method
        },
     [])
    };

console.log(oddLengths(arr));