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

// listen guess button
guessBtnEl.addEventListener('click', (e) => {
    console.log('Submitted');
    const guess = parseInt(guessInputEl.value);

    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a message between ${min} & ${max}`, 'red');
    } else {
        if (guessLeft <= 1) {
            guessBtnEl.disabled = true;
            setMessage(`Game Over`);
        } else {
            if (guess === winningNum) {
                guessBtnEl.disabled = true;
                setMessage(`You are right ${winningNum} is the right answer`, 'green');
            } else {
                guessLeft = guessLeft - 1;
                setMessage(`You have ${guessLeft} turns left`, 'initial');
            }
        }
    }

    e.preventDefault();
});

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
    guessInputEl.style.borderColor = color;
}