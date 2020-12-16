function Animal (name, energy) {
    let animal = Object.create(Animal.prototype)
    animal.name = name
    animal.energy = energy
    return animal;
}

Animal.prototype.eat = function (amount) {
    console.log(`${this.name} is eating ${amount}`);
    this.energy += amount;
}

Animal.prototype.play = function (length) {
    console.log(`${this.name} is playing ${length}`);
    this.energy -= length;
}

// Then what is the difference between
// const leo = Animal('Leo', 7)
// and
// const leo = new Animal('Leo', 7)


// Looking back at our Animal constructor, the two most important parts were
// creating the object and returning it. Without creating the object with
// Object.create, we wouldn’t be able to delegate to the function’s prototype on
// failed lookups. Without the return statement, we wouldn’t even get back the
// created object.

function AnimalWithNew (name, energy) {
    // let this = Object.create(AnimalWithNew.prototype)
    this.name = name
    this.energy = energy
    // return this; // implicitly return
}

AnimalWithNew.prototype.eat = function (amount) {
    console.log(`${this.name} is eating ${amount}`);
    this.energy += amount;
}

AnimalWithNew.prototype.play = function (length) {
    console.log(`${this.name} is playing ${length}`);
    this.energy -= length;
}

// When you invoke a function using the new keyword, those two lines are done
// for you implicitly ("under the hood") and the object that is created is
// called this.



const leo = Animal('Leo', 7)
const leoWithNew = new AnimalWithNew('LeoWithNew', 7)
console.log(leo);
console.log(leoWithNew);
leo.eat(1);
leoWithNew.eat(1);

// So we have created a crappy version of a class basically.
