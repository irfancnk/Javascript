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
varLetDifference();
