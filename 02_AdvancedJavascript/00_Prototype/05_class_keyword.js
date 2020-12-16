// ES6 class is just a syntactical sugar for the creation we saw before. What
// happens under the hood is that, every class is actually just a function.

class AnimalClass {
    constructor(name, energy) {
        this.name = name
        this.energy = energy
    }

    eat(amount) {
        console.log(`${this.name} is eating ${amount}`);
        this.energy += amount;
    }

    play(length) {
        console.log(`${this.name} is playing ${length}`);
        this.energy -= length;
    }

}


let leo = new AnimalClass('Leo', 10);
console.log(leo);
leo.play(2);

for (let key in leo) {
    if (leo.hasOwnProperty(key)) {
        console.log(`${leo.name} has ${key}`);
    }
}

console.log(`leo instanceof AnimalClass: ${leo instanceof AnimalClass}`);

// There are also some other syntactical sugars to make the use of classes
// easier

let friends = [];
// is the same thing as
let friendsWithoutSugar = new Array();
let prototypeOfFriends = Object.getPrototypeOf(friends);
let prototypeOfFriendsWithoutSugar = Object.getPrototypeOf(friendsWithoutSugar);
console.log("prototypeOfFriends === prototypeOfFriendsWithoutSugar: "
    + (prototypeOfFriends === prototypeOfFriendsWithoutSugar)
);
