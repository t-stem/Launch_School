// The following function unnecessarily uses two return statements to return boolean values.
//  Can you rewrite this function so it only has one return statement 
// and does not explicitly use either true or false?

// Try to come up with at least two different solutions.

function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

// solution 1:
function shortColorValid(color) {
  return color === "blue" || color === "green";
}

// solution 2:
function inverseColorValid(color) {
  return !(color !== "blue" && color !== "green");
}

// alternative solution:
const constColorValid = (color) => color === "blue" || color === "green";

// alternative solution
function arrayColorValid (color) {
  const VALID_COLORS = ["blue", "green"];
  return VALID_COLORS.includes(color);
}

console.log(shortColorValid("blue"));
console.log(shortColorValid("green"));
console.log(shortColorValid("yellow"));

console.log(inverseColorValid("blue"));
console.log(inverseColorValid("green"));
console.log(inverseColorValid("yellow"));

console.log(constColorValid("blue"));
console.log(constColorValid("green"));
console.log(constColorValid("yellow"));

console.log(arrayColorValid("blue"));
console.log(arrayColorValid("green"));
console.log(arrayColorValid("yellow"));

