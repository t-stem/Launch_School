let stack = [];
let register = 0;

function n(integer) {
  register = integer;
}

function push() {
  stack.push(register);
}

function add() {
  register += stack.pop();
}

function sub() {
  register -= stack.pop();
}

function mult() {
  register *= stack.pop();
}

function div() {
  register = Math.trunc(register / stack.pop());
}

function remainder() {
  register %= stack.pop();
}

function pop() {
  register = stack.pop();
}

function print() {
  console.log(register);
}

const TOKENS = Object.freeze({
  'PUSH': push,
  'ADD': add,
  'SUB': sub,
  'MULT': mult,
  'DIV': div,
  'REMAINDER': remainder,
  'POP': pop,
  'PRINT': print
});

function minilang(programString) {
  programString
  .split(" ")
  .forEach(operation => Number(operation) ? n(Number(operation)) : TOKENS[operation]());  
}

// Test cases:

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)