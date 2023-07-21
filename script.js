'use strict';

let score = 20;

let correctGuess = 1 + Math.trunc(20 * Math.random());
console.log(correctGuess);

document.querySelector('.again').addEventListener('click', () => {
  document.querySelector('body').style.backgroundColor = '#222222';

  document.querySelector('.score').textContent = '20';
  score = 20;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').textContent = '';
  correctGuess = 1 + Math.trunc(20 * Math.random());
  document.querySelector('.number').textContent = '?';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    alert('Enter your guess before clicking the button');
  } else if (guess !== correctGuess) {
    if (score > 1) {
      guess > correctGuess
        ? (document.querySelector('.message').textContent = 'Too High')
        : (document.querySelector('.message').textContent = 'Too Low');
      score--;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('body').style.backgroundColor = '#ff0000';
      score = 0;
    }
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.number').textContent = guess;
    document.querySelector('.message').textContent = '🥳 Correct Guess';
    document.querySelector('body').style.backgroundColor = '#60b347';
    let prevHighscore = document.querySelector('.highscore').textContent;
    if (prevHighscore < score) {
      document.querySelector('.highscore').textContent = score;
    }
  }
});
