
// JAVASCRIPT PROMISE OBJECT
// The catch() method returns a Promise and deals with rejected cases only.
// It behaves the same as calling Promise.prototype.then(undefined, onRejected)
// (in fact, calling obj.catch(onRejected) internally calls
// obj.then(undefined, onRejected)). This means, that you have to provide
// onRejected function even if you want to fallback to undefined result
// value - for example obj.catch(() => {}).


const axios = require('axios');
const express = require('express');

var GET_LOCAL_URL = "http://localhost:5555/";

var app = express();
app.get('/', function (req, res) {
	// res.send('Hello World');
})
var server = app.listen(5555);

var promise1 = new Promise(function(resolve, reject) {
	throw 'Oh crap!';
});

const instance = axios.create({
	timeout: 2000
});
var promise2 = instance.get(GET_LOCAL_URL);


promise1.catch(function(error) {
	console.log("Take a look : " + error);
});

promise2.catch(function(error) {
	console.log("Take a look : " + error);
	server.close();
});


























//
