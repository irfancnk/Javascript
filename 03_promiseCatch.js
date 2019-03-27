
// JAVASCRIPT PROMISE OBJECT
// The catch() method returns a Promise and deals with rejected cases only.
// It behaves the same as calling Promise.prototype.then(undefined, onRejected)
// (in fact, calling obj.catch(onRejected) internally calls
// obj.then(undefined, onRejected)). This means, that you have to provide
// onRejected function even if you want to fallback to undefined result
// value - for example obj.catch(() => {}).

var promise1 = new Promise(function(resolve, reject) {
	throw 'Oh crap!';
});

promise1.catch(function(error) {
	console.log(error);
});
