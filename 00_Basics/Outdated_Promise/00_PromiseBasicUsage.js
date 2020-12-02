// JAVASCRIPT PROMISE OBJECT
// Promise is an alternative to callback implementations.
// Promises are immutable and does not change after succeded given task.
// Their states are whether Pending, Fulfilled or Rejected.

function sayCrap() {
    console.log('Oh Crap');
}


function sayShit() {
    console.log('Oh Shit');
}


function delay(t) {
    return new Promise(function(resolve) {
        return setTimeout(resolve, t)
    });
}

function delatWithResult(t) {
    return new Promise(function(resolve) {
        setTimeout(resolve, t, "Value");
    });

    // OR
    // return new Promise(function(resolve) {
    //     return setTimeout(function() {
    //         resolve("Oh nice")
    //     },t);
    // });

}


function delayWithReject(t, choice) {
    return new Promise(function(resolve, reject) {
        if (choice) {
            return setTimeout(resolve, t)
        } else {
            return setTimeout(reject, t)
        }
    });
}


// BASIC DELAYED OPERATION WITH THEN CHAIN
delay(1000).then(sayCrap);


// BASIC DELAYED OPERATION WITH THEN CHAIN AND RETURN VALUE
delatWithResult(2000).then(function(response) {
    console.log("Just resolved : " + response);
});

// BASIC DELAYED OPERATION WITH THEN AND CATCH CHAIN
delayWithReject(3000, true).then(sayCrap);
delayWithReject(4000, false).then(sayCrap).catch(sayShit);

// END
