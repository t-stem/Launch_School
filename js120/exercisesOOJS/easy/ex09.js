/*
Consider the following code:
*/

class Pet {
  constructor(species, name, shelter) {
    this.name = name;
    this.species = species;
  }
}

class Owner {
  constructor(name) {
    this.name = name;
  }

  pets = [];

  numberOfPets() {
    return this.pets.length;
  }
}

class Shelter {
  adoptions = {};

  adopt(owner, animal) {
    if (!Object.keys(this.adoptions).includes(owner.name)) {
      this.adoptions[owner.name] = [];
    }
    this.adoptions[owner.name].push(animal);
    owner.pets.push(animal);
  }

  printAdoptions() {
    for (let ownerName in this.adoptions) {
      console.log(`${ownerName} has adopted the following pets:`);
      this.adoptions[ownerName].forEach(pet => console.log(`a ${pet.species} named ${pet.name}`));
      console.log('\n');
    }
  }
}


let butterscotch = new Pet('cat', 'Butterscotch');
let pudding      = new Pet('cat', 'Pudding');
let darwin       = new Pet('bearded dragon', 'Darwin');
let kennedy      = new Pet('dog', 'Kennedy');
let sweetie      = new Pet('parakeet', 'Sweetie Pie');
let molly        = new Pet('dog', 'Molly');
let chester      = new Pet('fish', 'Chester');

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');

let shelter = new Shelter();
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);

/*
P Hanson has adopted the following pets:
a cat named Butterscotch
a cat named Pudding
a bearded dragon named Darwin

B Holmes has adopted the following pets:
a dog named Molly
a parakeet named Sweetie Pie
a dog named Kennedy
a fish named Chester

P Hanson has 3 adopted pets.
B Holmes has 4 adopted pets.
*/