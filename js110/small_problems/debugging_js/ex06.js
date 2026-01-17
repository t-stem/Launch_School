/*
Caroline manages the member directory of her club and decided to implement a program she can use for doing that. 
Since the club is not very big, it's sufficient for her to keep the members' names and phone numbers in an object. 
Later she wants to add functionality that allows her to write this object to a file.

One requirement Caroline takes very seriously is input validation. 
She intended for her code to strictly require that only alphabetic letters be included in the members' first and last names, 
separated by a space. But upon making a typo when entering the information of the newest member, she realizes that isn't the case.

Figure out why not and fix the code so that it works as expected. You may also consider writing a few more test cases to ensure that the input validation requirement is properly met.
*/

/* ANSWER:
The names are not properly validated because the regex contains \w, which refers to a character class that includes all alphanumeric chars.
This means that it also includes numbers.
As a result, .test() returns true when the name contains an numeric char, which is why the last test case erroneously returns true

In addition, the regex doesn't use the the explicit char class for a space char. It uses an actual space where it could use \s
The regex also doesn't have the i flag to explictly make the test insensitive to case.
*/

let memberDirectory = {
  'Jane Doe': '323-8293',
  'Margaret Asbury': '989-1111',
  'Callum Beech': '533-9090',
  'Juanita Eastman': '424-1919',
};

function isValidNameWRONG(name) {
  return (/^\w+ \w+$/).test(name);
}


function isValidName(name) {
  return (/^[a-z]+ [a-z]+$/i).test(name); // adding ^ and $ anchors ensures that test only returns true when the entire string matches the regex, not when the string contains a substring that matches the regex. Also, \s includes tabs and newlines, so we just want to use a normal space here ' '
}

function isValidPhone(phone) {
  return (/^\d{3}-\d{4}$/).test(phone);
}


console.log(isValidName('Laura Carlisle'));
console.log(isValidName('RachelGarcia'));
console.log(isValidName('Earl 5mith'));
console.log(isValidName('Laura Carlisle'));


function validMemberInfo(name, phone) {
  return isValidName(name) && isValidPhone(phone);
}

function addMember(name, phone) {
  if (validMemberInfo(name, phone)) {
    memberDirectory[name] = phone;
  } else {
    console.log('Invalid member information.');
  }
}

/*
addMember('Laura Carlisle', '444-2223');
addMember('Rachel Garcia', '232-1191');
addMember('Earl 5mith', '331-9191');

console.log(memberDirectory);
*/