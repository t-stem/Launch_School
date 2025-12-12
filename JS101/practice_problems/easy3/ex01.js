// Write three different ways to remove all of the elements from the following array:

let numbers = [1, 2, 3, 4];
const LENGTH = numbers.length;

// using .pop()
for (element = 4; element > 0; element -= 1) { // IMPORTANT: .forEach() doesn't work here because the index position will increase every interation while the array gets shorter every iteration (iteration 0, last element index 3), (iteration 1, last element index 2), (iteration 2, last element index 1) -> this last iteration goes beyond array length
  numbers.pop();
}
console.log(numbers)

numbers = [1, 2, 3, 4];

// using .shift()
for (element = 0; element < LENGTH; element += 1) {
  numbers.shift(); 
}
console.log(numbers);

numbers = [1, 2, 3, 4];


// using .splice()
numbers.splice(0, 4);
console.log(numbers);
