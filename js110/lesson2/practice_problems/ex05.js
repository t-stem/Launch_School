/*
Compute and display the total age of the male members of the family.
*/

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let totalAge = 0;

for (let person in munsters) {
  totalAge += munsters[person]['gender'] === 'male' ? munsters[person]['age'] : 0;
}

console.log(totalAge);

let ageTotal = 0;

Object.values(munsters).forEach(personObj => {
  if (personObj['gender'] === 'male') {
    ageTotal += personObj['age'];
  }
});

console.log(ageTotal);