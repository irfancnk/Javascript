
// VARIABLE GETS HOISTED ON CREATION PHASE
function foo() {
	console.log(x); // undefined
	var x = 0;
}

// VARIABLE IS NOT HOISTED ON CREATION PHASE
function bar() {
	try {
		console.log(y);
	} catch (e) {
		// Reference error
	}
	let y = 0;
}

foo();
bar();

// For error handling, it seems like throwing a ReferenceError would be a better
// default than returning undefined.
