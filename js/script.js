
var targetNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;
let submitGus = document.getElementById("sum-btn")

submitGus.addEventListener("click",(e)=>{
    const userGuess = parseInt(document.getElementById('userGuess').value);
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        alert('Please enter a valid number between 1 and 100.');
        return;
    }

    attempts++;
    document.getElementById('attempts').innerText = attempts;

    if (userGuess === targetNumber) {
        displayResult('Correct! You guessed the right number.');
    } else {
        displayHint(userGuess);
    }
})


function displayResult(message) {
    document.getElementById('result').innerText = message;
}

function displayHint(userGuess) {
    const hint = userGuess < targetNumber ? 'Too low! Guess higher.' : 'Too high! Guess lower.';
    document.getElementById('hint').innerText = hint;
}

let playagain = document.getElementById("playagain");
playagain.addEventListener("click",(e)=>{
   
    document.getElementById('userGuess').value = '';
    document.getElementById('result').innerText = '';
    document.getElementById('hint').innerText = '';
    document.getElementById('attempts').innerText = '0';
    attempts = 0;
    
   
    targetNumber = Math.floor(Math.random() * 100) + 1;
})