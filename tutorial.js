var util = require('util');
// console.log(util.inspect(Promise));

// JAVASCRIPT TUTORIAL

// ===================================== 0 =====================================
// DIFFERENCE BETWEEN var and let
// The difference is scoping.
// var is scoped to the nearest function block.
// let is scoped to the nearest enclosing block.
// Both are global if outside any block.
// Uncomment varLetDifference() call to execute
function varLetDifference() {
	if (true) {
		var varNum = 0;
		let letNum = 1;
	}
	console.log(varNum);
	try {
		console.log(letNum);
	} catch (e) {
		console.log("letNum is not defined");
	}
}
// varLetDifference();

// ===================================== 0 =====================================
// =============================================================================
// =============================================================================
// =============================================================================
// =============================================================================
// =============================================================================
// ===================================== 1 =====================================

// JAVASCRIPT PROMISE OBJECT
// Promise.all() method returns a single Promise that resolves when all of the
// promises passed as an iterable have resolved or when the iterable contains no
// promises.

var promise1 = Promise.resolve(1);
var promise2 = 2;
var promise3 = new Promise(function(resolve, reject) {
	setTimeout(resolve, 500, 3);
	// Resolved after 500ms
});

Promise.all([promise1, promise2, promise3]).then(function(values) {
	console.log(values);
});

// Promise.all([promise1, promise2, promise3]).then(function(values) {
//   console.log(values);
// });



// ===================================== 1 =====================================
