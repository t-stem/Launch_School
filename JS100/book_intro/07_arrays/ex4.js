let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

newArray = myArray.map(number => number % 2 === 0 ? "Even" : "Odd"); // ternary operator syntax = condition ? value if true : value if false
console.log(newArray);