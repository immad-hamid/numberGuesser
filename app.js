// game values
let min = 1,
    max = 10,
    winningNum = Math.floor(Math.random() * (max - min + 1) + min),
    guessLeft = 3;

console.log(`Winning Number: ${winningNum}`);

// ui variables
const gameEl = document.querySelector('#game'),
      minEl = document.querySelector('.min-num'),
      maxEl = document.querySelector('.max-num'),
      guessInputEl = document.querySelector('#guess-input'),
      guessBtnEl = document.querySelector('#guess-value'),
      message = document.querySelector('.message');

// assign values
minEl.textContent = min;
maxEl.textContent = max;

// play again even listner(we will access the button through it's parent because we have to use event deligation as the class was added after the page load)
gameEl.addEventListener('mousedown', (e) => {
    if (e.target.className == 'play-again') {
        // guessBtnEl.disabled = false;
        console.log();
        window.location.reload();
    }
    console.log('game');
});

// listen guess button
guessBtnEl.addEventListener('click', (e) => {
    console.log('Submitted');
    const guess = parseInt(guessInputEl.value);

    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a message between ${min} & ${max}`, 'red');
    } else {
        if (guessLeft <= 1) {
            result(`Game Over, the right answer was ${winningNum}`, false);
        } else {
            if (guess === winningNum) {
                result(`You are right ${winningNum} is the right answer`, true);
            } else {
                guessLeft = guessLeft - 1;
                setMessage(`You have ${guessLeft} turns left`, 'red');
            }
        }
    }

    e.preventDefault();
});

function result(msg, won) {
    let color;

    // if user win then let the color be green and red if the user lose
    won ? color = 'green' : color = 'red';
    // showing the result by again sending the text and color to setMessage
    setMessage(msg, color);

    // play again
    guessBtnEl.value = 'Play Again';
    guessBtnEl.className += 'play-again';
}

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
    guessInputEl.style.borderColor = color;
    guessInputEl.value = '';
}