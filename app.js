// game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessLeft = 3;

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
// guessBtnEl.addEventListener();