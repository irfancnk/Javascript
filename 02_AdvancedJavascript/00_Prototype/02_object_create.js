const parent = {
    name: 'Irfan',
    age: 35,
    nation: 'Turkish'
}

const child = Object.create(parent)
child.name = 'Can'
child.age = 7


console.log(child); // { name: 'Can', age: 7 }
console.log(child.name) // Ryan
console.log(child.age) // 7
console.log(child.nation) // Turkish

// Even if the child object does not have the property nation we can still use
// its value. Whenever there’s a failed property lookup on child, JavaScript
// will delegate that look up to the parent object. Meaning that even though
// child doesn’t have a nation property, parent does so when you log
// child.nation you’ll get the parent's nation which was Turkish.


// So we can use this approach for our previous example:

const animalMethods = {
    eat(amount) {
        this.energy += amount
    },
    play(length) {
        this.energy -= length
    }
}

function Animal (name, energy) {
    let animal = Object.create(animalMethods);
    animal.name = name;
    animal.energy = energy;
    return animal;
}

const leo = Animal('Leo', 7)
const snoop = Animal('Snoop', 10)
leo.eat(10)
console.log(leo);
snoop.play(5)
console.log(snoop);



// So far, so good. There are still some improvements we can make though. It
// seems just a tad “hacky” to have to manage a separate object (animalMethods)
// in order to share methods across instances. That seems like a common feature
// that we'd want to be implemented into the language itself. Turns out it is
// and it’s the whole reason we are here - prototype...
