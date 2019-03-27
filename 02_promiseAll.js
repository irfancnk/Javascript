
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
