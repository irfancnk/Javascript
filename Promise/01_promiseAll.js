
// JAVASCRIPT PROMISE OBJECT
// Promise.all() method returns a single Promise that resolves when all of the
// promises passed as an iterable have resolved or when the iterable contains no
// promises.


const axios = require('axios');
const express = require('express')

var GET_REMOTE_URL = "https://www.facebook.com/";
var GET_LOCAL_URL = "http://localhost:5555/";

var app = express();
app.get('/', function (req, res) {
	// Added timeout to simulate latency on GET request
	setTimeout(function() {
		res.send('Hello World');
	}, 5000);
})
var server = app.listen(5555);


var promise1 = Promise.resolve(1);
var promise2 = 2;
var promise3 = new Promise(function(resolve, reject) {
	// Added timeout to simulate a filereading operation etc.
	setTimeout(resolve, 500, 3);
});
var promise4 = axios.get(GET_REMOTE_URL);
var promise5 = axios.get(GET_LOCAL_URL);

var allPromises = [];
allPromises.push(promise1, promise2, promise3, promise4, promise5);

Promise.all(allPromises).then(function(values) {
	console.log(values);
	server.close();
});
