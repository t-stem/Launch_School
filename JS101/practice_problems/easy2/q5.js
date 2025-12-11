// Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the number at index 2, so that the array becomes [1, 2, 4, 5].

let array = [1, 2, 3, 4, 5];

array.splice(2, 1); // .splice() mutates the array and returns the deleted elements
console.log(array);