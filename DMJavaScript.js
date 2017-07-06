// To run the contents of the directory on a local web server
// Run the following in the terminal.

> python -m SimpleHTTPServer

// You can reach it from url : localhost:8000
// with your Web Browser

// To adjust port number manually, use:

> python -m SimpleHTTPServer 7800

// -----------------------------------------------------------------------------
// ---------------------------- JavaScript Tutorial ----------------------------
// -----------------------------------------------------------------------------

// Variables are general and can be assigned to anything like:
// String ->   var variable1 = 'Bob';
// Number ->   var variable2 = 10;
// Boolean ->  var variable3 = true;,
// Array ->    var variable4 = [1,'Bob','Steve',10];
// Object ->   var variable5 =document.querySelector('h1');

var iceCream = 'chocolate';
if (iceCream === 'chocolate') // Check if the condition holds with '==='
{
    alert('Yay, I love chocolate ice cream!'); // Web Page dialogue box
}
else
{
    alert('Awwww, but chocolate is my favorite...');
}

// Addition '+'
// 6 + 9;
// "Hello " + "world!";

// Equality, Does-not Equal
// variable2 === 3;    variable2 !==3;
// Returns boolean
// '!' -> logical opposite

// -----------------------------------------------------------------------------

// Basic function definition

function multiply(num1,num2)
{
  var result = num1 * num2;
  return result;
}

// -----------------------------------------------------------------------------

// Events
// Code structures which listen for things happening in browser

document.querySelector('html').onclick = function()
{
    alert('Ouch! Stop poking me!');
}

// Prompt to get string input from user

prompt('Please enter your name.');

// Following code blocks are equivalent

document.querySelector('html').onclick = function() {};

// AND

var myHTML = document.querySelector('html');
myHTML.onclick = function() {};

// Another example

var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

// Example code block to change image on click

var myImage = document.querySelector('img');
myImage.onclick = function()
{
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png')
    {
        myImage.setAttribute ('src','images/firefox2.png');
    }
    else
    {
        myImage.setAttribute ('src','images/firefox-icon.png');
    }
}

// -----------------------------------------------------------------------------

// Example code block to change a string dynamically

// localStorage holds the data in browser's memory

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName()
{
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name'))
{
    setUserName();
}
else
{
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function()
{
    setUserName();
}

// -----------------------------------------------------------------------------
