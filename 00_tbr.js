// -----------------------------------------------------------------------------

// console.log = To write something to the console

console.log('Text will appear in terminal.');
console.log(__dirname); // Write which directory you are in to the console
console.log(__filename); // Write which file you are on to the console

// -----------------------------------------------------------------------------

// setTimeout = Wait 2000 miliseconds then execute the function

setTimeout(function(){
  console.log('2 seconds have passed');
}, 2000)

// -----------------------------------------------------------------------------

// setInterval = Wait 1000 miliseconds then execute the function continuously

var time = 0;
setInterval(function(){
  time = time + 1;
  console.log(time + ' seconds have passed');
}, 1000);

// -----------------------------------------------------------------------------

// clearInterval(timer) = Stop the continuous function execution

var time = 0;
var check = setInterval(function(){
  if(time >= 5){
    clearInterval(check);
  }
}, 1000);

// -----------------------------------------------------------------------------

// Equalize variable to function, Use function as a parameter

function callFunction(fun){
  fun();
}
var sayBye = function (){
  console.log('bye');
};
sayBye(); // Does the same job with function call
callFunction(sayBye); // Does the same job with function call

// -----------------------------------------------------------------------------

// These 2 code parts are exactly the same :
var counter = function(arr){
  return 'There are ' + arr.length + ' elements';
};
module.exports.counter = counter;
// AND
module.exports.counter = function(arr){
  return 'There are ' + arr.length + ' elements';
};

// -----------------------------------------------------------------------------

// Listening an event for occurence
// If event occurs, function is called

var events = require('events');
var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(mssg){
  console.log(mssg);
});
myEmitter.emit('someEvent','the event was emitted');

// -----------------------------------------------------------------------------
