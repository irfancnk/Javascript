// Common way to create object
let animal = {};
// Add properties to animal object with dot notation
animal.name = 'Leo';
animal.energy = 10;
animal.eat = function (amount) {
    this.energy += amount;
}
animal.play = function (length) {
    this.energy -= length;
}

// In order to create multiple animals we can create a function Animal
function Animal(name, energy) {
    let animal = {};
    animal.name = name;
    animal.energy = energy;
    animal.eat = function (amount) { this.energy += amount; }
    animal.play = function (length) { this.energy -= length; }
    return animal;
}

const leo = Animal('Leo', 10);
const snoopy = Animal('Snoopy', 12);
console.log(leo);
console.log(snoopy);

// However, there is a weakness with this pattern. The biggest and the one we’ll
// attempt to solve has to do with the methods - eat and play. Each of those
// methods are not only dynamic, but they’re also completely generic. What that
// means is that there’s no reason to re-create those methods as we’re currently
// doing whenever we create a new animal. We’re just wasting memory and making
// each animal object bigger than it needs to be. Instead of re-creating those
// methods every time we create a new animal, we can move them to their own
// object and we can have each animal reference that object. We can call this
// pattern Functional Instantiation with Shared Methods, wordy but descriptive.
