// So what exactly is prototype in JavaScript? Simply put, every function in
// JavaScript has a prototype property that references an object. Test it out
// for yourself.
function doThing () {}
console.log(doThing.prototype) // {}


// What if instead of creating a separate object to manage our methods (like
// we’re doing with animalMethods), we just put each of those methods on the
// Animal function’s prototype? Then all we would have to do is instead of using
// Object.create to delegate to animalMethods, we could use it to delegate to
// Animal.prototype. We’ll call this pattern Prototypal Instantiation.


function Animal (name, energy) {
    let animal = Object.create(Animal.prototype)
    animal.name = name
    animal.energy = energy
    return animal
}

Animal.prototype.eat = function (amount) {
    this.energy += amount
}

Animal.prototype.play = function (length) {
    this.energy -= length
}

const leo = Animal('Leo', 7)
const snoop = Animal('Snoop', 10)

leo.eat(10)
snoop.play(5)
