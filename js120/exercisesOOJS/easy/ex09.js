/*
Consider the following code:
*/

class Pet {
  constructor(species, name) { // IMPROVEMENT: removed excess shetler 'shelter' parameter
    this.name = name;
    this.species = species;
    
  }

  info() {
    return `a ${this.species} called ${this.name}`;
  }
}

class Owner {
  constructor(name) {
    this.name = name;
    this.pets = []; // IMPROVEMENT: initialize instance state inside the constructor rather than outside
  }

  addPet(pet) {
    this.pets.push(pet); //IMPROVEMENT: let the class manage its own pets
  }

  numberOfPets() {
    return this.pets.length;
  }

  printPets() {
    this.pets.forEach(pet => console.log(`${pet.info()}`)); // IMPROVEMENT: added pet.info() method so that Shelter doesn't need to know about Pet details
  }
}

class Shelter {
  adoptions = {}; // IMPROVEMENT: {ownerName: ownerObj}

  adopt(owner, animal) {
    if (!Object.keys(this.adoptions).includes(owner.name)) {
      this.adoptions[owner.name] = [];
    }
    this.adoptions[owner.name] = owner; // IMPROVEMENT: store pet ownership on owner exclusively, rather than on Owner and Shelter (avoids duplication)
    owner.addPet(animal); // IMPROVEMENT: let owner manage own pets through own method (Shelter just asks Owner to add one) rather than owner.pets.push(animal);
  }

  printAdoptions() {
    for (let ownerName in this.adoptions) {
      console.log(`${ownerName} has adopted the following pets:`);
      this.adoptions[ownerName].printPets(); // IMPROVEMENT: use printPets() method on the Owner to print
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