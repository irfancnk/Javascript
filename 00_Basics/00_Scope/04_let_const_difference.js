let userFirstName = 'Irfan';
const userCode = 'irfan';

userFirstName = 'Irfan Can';
try {
    userCode = '@irfancnk';
} catch (e) {
    // TypeError: Assignment to constant variable.
}


// const is almost exactly the same as let. However, the only difference is that
// once you’ve assigned a value to a variable using const, you can’t reassign
// it to a new value.


// Just because a variable is declared with const doesn’t mean it’s immutable,
// all it means is the value can’t be re-assigned.


let notAssignedLet;
const notAssignedConst; // SyntaxError


// Another difference between the let and const is that, const variable must
// be initialized upon the declaration unlike let.
