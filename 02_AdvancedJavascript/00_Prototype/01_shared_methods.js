const animalMethods = {
    eat(amount) {
        this.energy += amount
    },
    play(length) {
        this.energy -= length
    }
};

function Animal (name, energy) {
    let animal = {};
    animal.name = name;
    animal.energy = energy;
    animal.eat = animalMethods.eat;
    animal.play = animalMethods.play;
    return animal;
}

const leo = Animal('Leo', 7);
const snoop = Animal('Snoop', 10);
console.log(leo);
leo.eat(1);
console.log(leo);

// We now create the animal methods only once in memory then referencing them.
// However this solution is still weak. Think of the situation where we need to
// add another functionality to animal. Like say "sleep". Now instead of just
// adding that into animalMethods object, we need to assign it to the object
// that is created in Animal function too.

// We want the animal to always have reference to the methods in the
// animalMethods object. We can use Object.create feature of Javascript for
// that.
