/*
We have been asked to implement a function that determines whether or not a given word is a reserved keyword. 

We wrote the isReserved function below along with some test cases, but we aren't seeing the expected result. 

Why not? Fix the code so that it behaves as intended.
*/

/* ANSWER:
It's because the return true statement is included in the callback for .forEach() while the return false statement is included in the scope of reserved.
This means that the return true statement in the callback returns the value true to .forEach().
However, .forEach() itself doesn't return a value, so the value true is not passed to the caller of .forEach()
As a result, the function isReserved() will always return false
*/

const RESERVED_KEYWORDS = ['break', 'case', 'catch', 'class', 'const', 'continue',
  'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'finally',
  'for', 'function', 'if', 'implements', 'import', 'in', 'instanceof', 'interface',
  'let', 'new', 'package', 'private', 'protected', 'public', 'return', 'static',
  'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while',
  'with', 'yield'];

function isReserved(name) {
  RESERVED_KEYWORDS.forEach(reserved => {
    if (name === reserved) {
      return true;
    }
  });

  return false;
}

console.log(isReserved('monkey')); // false
console.log(isReserved('patch'));  // false
console.log(isReserved('switch')); // should be: true