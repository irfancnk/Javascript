
// JAVASCRIPT PROMISE OBJECT
// Promise.all() method returns a single Promise that resolves when all of the
// promises passed as an iterable have resolved or when the iterable contains no
// promises.

const axios = require('axios');
const express = require('express');

var GET_REMOTE_URL = "https://www.facebook.com/";
var GET_LOCAL_URL = "http://localhost:5555/";
var httpClientWithTimeout = axios.create();
httpClientWithTimeout.defaults.timeout = 1500;
var app = express();

// EXPRESS APP FOR SERVING DATA WITH SMALL DELAY
app.get('/', function (req, res) {
	setTimeout(function() {
		res.send('Promise3');
	}, 2000);
});
// START EXPRESS SERVER
var server = app.listen(5555);

// RESOLVE IMMEDIATELY
var promise1 = Promise.resolve("Promise1");

// RESOLVE AFTER 500 MS
var promise2 = new Promise(function(resolve, reject) {
	setTimeout(resolve, 500, "Promise2");
});

// FETCH FROM LOCALHOST
var promise3 = axios.get(GET_LOCAL_URL);

// TRY TO FETCH FROM LOCALHOST WITH 1500 MS TIMEOUT
var promise4 = httpClientWithTimeout.get(GET_LOCAL_URL);

// HELPER PRINT FUNCTION FOR PROMISE DATA
function printValues(values) {
	for (var i = 0; i < values.length; i++) {
		if (typeof values[i] === typeof "string") {
			console.log(values[i]);
		} else {
			console.log(values[i].data);
		}
	}
}

var allPromises = [];
allPromises.push(promise1, promise2, promise3);

// WAIT FOR FIRST 3 PROMISE TO RESOLVE, THEN CALL THE printValues AFTER ALL RESULTED
Promise.all(allPromises).then(function(values) {
	printValues(values)
});

// ADD A PROMISE THAT WILL BE REJECTED BECAUSE OF TIMEOUT
allPromises.push(promise4);

// CALLBACK FOR ALL RESOLVED CASE
function doIfNoError(values) {
	printValues(values)
	server.close();
}

// CALLBACK FOR AT LEAST 1 REJECTED CASE
function doIfError(value) {
	console.log("Request Timeout");
	server.close();
}


promiseAll = async (allPromises) => {
	await Promise.all(allPromises)
  	.then(doIfNoError) // CALLED IF ALL PROMISES ARE RESOLVED
  	.catch(doIfError) // CALLED EVEN IF ONE PROMISE IS REJECTED
}

promiseAll(allPromises);




// END
