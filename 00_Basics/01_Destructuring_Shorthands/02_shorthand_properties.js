// With Shorthand Properties, whenever we have a variable which is the same name
// as a property on an object, when constructing the object, we can omit the
// property name.

// Also with ES6’s Shorthand Method Names, we can omit the function keyword
// completely. What that means is that code that used to look like this,

function formatMessage (name, id, avatar) {
    return {
        name: name,
        id: id,
        avatar: avatar,
        timestamp: Date.now(),
        save: function () {
            // save message
        }
    };
}


// Can now look like the following:


function formatMessageIdentical (name, id, avatar) {
    return {
        name,
        id,
        avatar,
        timestamp: Date.now(),
        save () {
            //save message
        }
    };
}
