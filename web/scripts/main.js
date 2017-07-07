
// Button adjustments
/*
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Onbiron is the best, ' + storedName;
}

function setUserName()
{
    var userName = prompt('Please enter your name.');
    localStorage.setItem('name', userName);
    myHeading.textContent = 'Hi '+ userName + ', Onbiron is the best';
}

myButton.onclick = function(){
  setUserName();
}
*/
/*
// -----------------------------------------------------------------------------
// ---------------------------- Finding number game ----------------------------
// -----------------------------------------------------------------------------

var randomNumber = Math.floor(Math.random() * 100) + 1;
var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');
var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');
var guessCount = 1;
var resetButton;

function checkGuess()
{
    var gameWinning = document.querySelector('h2');
    var userGuess = Number(guessField.value);
    if (guessCount === 1)
    {
        guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + ' ';
    if (userGuess === randomNumber)
    {
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        gameWinning.textContent = 'You have done it' + userName + '!';
        setGameOver();
    }
    else if (guessCount === 10)
    {
        lastResult.textContent = '!!!GAME OVER!!!';
        lowOrHi.textContent = '';
        setGameOver();
    }
    else
    {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if(userGuess < randomNumber)
        {
            lowOrHi.textContent='Last guess was too low!' ;
        }
        else if(userGuess > randomNumber)
        {
            lowOrHi.textContent = 'Last guess was too high!';
        }
    }
    guessCount++;
    guessField.value = '';
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver()
{
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame()
{
    guessCount = 1;
    var resetParas = document.querySelectorAll('.resultParas p');
    for(var i = 0 ; i < resetParas.length ; i++)
    {
        resetParas[i].textContent='';
    }
    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value='';
    guessField.focus();
    lastResult.style.backgroundColor='white';
    randomNumber=Math.floor(Math.random() * 100) + 1;
}

// -----------------------------------------------------------------------------
// ------------------------- Finding number game over --------------------------
// -----------------------------------------------------------------------------
*/
