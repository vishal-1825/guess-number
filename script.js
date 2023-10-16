'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there's no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';
  } else if (guess < 1 || guess > 20) {
    document.querySelector('.message').textContent = '❌ Invalid number!';
    // when guess is correct
  } else if (guess === secretNumber) {
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    document.querySelector('.message').textContent = '🎉 Correct number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.guess').style.visibility = 'hidden';
    document.querySelector('.check').style.visibility = 'hidden';
    // when guess is incorrect
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess < secretNumber ? '📉 Too low!' : '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😢 You lost the game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#b34747';
      document.querySelector('.number').style.width = '30rem';

      document.querySelector('.guess').style.visibility = 'hidden';
      document.querySelector('.check').style.visibility = 'hidden';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.guess').style.visibility = 'visible';
  document.querySelector('.check').style.visibility = 'visible';
});
