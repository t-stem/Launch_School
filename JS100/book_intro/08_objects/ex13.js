// As written, this code will raise an error on line 5. Without modifying the function definition of foo, update this code to print the desired text.

function foo(bar) {
  console.log(bar());
};

let a = function() {
    return "Welcome"
};

let b = function() {
    return 3.1415
};

let c = function() {
    return [1, 2, 3]
};


foo(a);    // Should print 'Welcome'
foo(b);    // Should print 3.1415
foo(c);    // Should print [1, 2, 3]