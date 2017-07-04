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

// Default function declaration

function sayHi(){
    console.log('hi');
}

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

// Say count.js is down below

var counter = function(arr){
  return 'There are ' + arr.length + ' elements';
  // array.length gives element num.
};

// require = Include another _.js file

require('./count');
console.log(counter([1,2,3,4]));

// -----------------------------------------------------------------------------
