// Last thing to mention in this chapter is the arrow functions. Arrow
// functions do not have their own this keyword. Hence they can not be
// constructor functions.

const Animal = () => {};

try {
    const leo = new Animal();
} catch (e) {
    // TypeError: Animal is not a constructor
}

// Arrow functions do not have a prototype.
