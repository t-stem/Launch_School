let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers);

function findIntegers(array) {
    filteredArray = array.filter(function testNumber(element) {
        return Number.isInteger(element);
        });
    return filteredArray
}
