var util = require('util');
// console.log(util.inspect(Promise));

// JAVASCRIPT TUTORIAL


// DIFFERENCE BETWEEN var and let
// The difference is scoping.
// var is scoped to the nearest function block.
// let is scoped to the nearest enclosing block.
// Both are global if outside any block.
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
varLetDifference();



// var promise1 = Promise.resolve(3);
// var promise2 = 42;
// var promise3 = new Promise(function(resolve, reject) {
//   setTimeout(resolve, 100, 'foo');
// });
//
// Promise.all([promise1, promise2, promise3]).then(function(values) {
//   console.log(values);
// });
