
// JAVASCRIPT PROMISE OBJECT
// Promise is an alternative to callback implementations.
// Promises are immutable and does not change after succeded given task.
// Their states are whether Pending, Fulfilled or Rejected.



function delay(t){
    return new Promise(function(resolve) {
        return setTimeout(resolve, t)
    });
}

function delayWithReturn(t) {
    return new Promise(function(resolve) {
        resolve("Oh nice");
    });

}


function delayWithChoice(t, choice) {
    return new Promise(function(resolve, reject) {
        if (choice) {
            return setTimeout(resolve, t)
        } else {
            return setTimeout(reject, t)
        }
    });
}


function sayCrap(){
    console.log('Oh Crap');
}


function dontSayCrap(){
    console.log('We dont say crap here');
}

function sayParameter(x){
    console.log(x);
}




delayWithReturn(1000).then(function(response) {
    console.log(response);
});


//
// delay(1000).then(sayCrap);
// delayWithChoice(2000, true).then(sayCrap);
// delayWithChoice(3000, false).then(sayCrap).catch(dontSayCrap);
