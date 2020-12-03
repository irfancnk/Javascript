function objectify (key, value) {
    let obj = {}
    obj[key] = value
    return obj;
}

objectify('name', 'Irfan') // { name: 'Irfan' }


// With Computed Property Names, we can use object literal notation to assign
// the expression as a property on the object without having to create it first.
// So the code above can now be rewritten like this.


function objectifyIdentical (key, value) {
    return {
        [key]: value
    };
}

objectifyIdentical('name', 'Irfan') // { name: 'Irfan' }
