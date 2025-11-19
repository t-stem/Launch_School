// Write a function that searches an array of strings for every element that
// matches the regular expression given by its argument. 
// The function should return all matching elements in an array.

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(array, regex) {
    let output = [];
    array.forEach(element => {
        if (regex.test(element)) {
            output.push(element);
        }
    })
    return output;
}

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']

function allMatches2(array, regex) {
    return array.filter(element => regex.test(element));
}