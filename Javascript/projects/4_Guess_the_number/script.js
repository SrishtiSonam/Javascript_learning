let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const guess = document.getElementById('guess') 
const messageElement = document.getElementById('message');
const guessButton = document.getElementById('guessButton');
const resetButton = document.getElementById('resetButton');
guessButton.addEventListener('click', checkGuess);  
resetButton.addEventListener('click', resetGame);

function checkGuess() {
    const val = Number(guess.value);
    attempts++;
    let message = '';
    if (val === randomNumber) {
        message = `🎉 Correct! You guessed it in ${attempts} attempts.`;
    } else if (val < randomNumber) {
        message = 'Too low! Try again.';
    } else if (val > randomNumber) {
        message = 'Too high! Try again.';
    } else {
        message = 'Please enter a valid number.';
    }
    messageElement.textContent = message;
    if (guess === randomNumber) {
        guess.disabled = true;
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('guess').value = '';
    document.getElementById('guess').disabled = false;
    document.getElementById('message').textContent = '';
}