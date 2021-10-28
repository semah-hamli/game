'use strict';
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const scoreEl0 = document.querySelector('#score--0');
const scoreEl1 = document.querySelector('#score--1');
const currentSc0 = document.getElementById('current--0');
const currentSc1 = document.getElementById('current--1');
const dice = document.querySelector('.dice');
const NewGame = document.querySelector('.btn--new');
const RollDice = document.querySelector('.btn--roll');
const Hold = document.querySelector('.btn--hold');

scoreEl0.textContent = 0;
scoreEl1.textContent = 0;
currentSc0.textContent = 0;
currentSc1.textContent = 0;
let currentscore = 0;
let score = [0, 0];
let activePlayer = 0;
let gameNotOver = true;

const switching = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentscore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0EL.classList.toggle('player--active');
  player1EL.classList.toggle('player--active');
};
const starter = function () {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.toggle('player--winner');

  document.querySelector(`.name--${activePlayer}`).classList.toggle('name');
};
dice.classList.add('hidden');

RollDice.addEventListener('click', function () {
  if (gameNotOver) {
    let diceNum = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.src = `dice-${diceNum}.png`;

    if (diceNum !== 1) {
      currentscore += diceNum;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentscore;
    } else {
      switching();
    }
  }
});

Hold.addEventListener('click', function () {
  if (gameNotOver) {
    score[activePlayer] = score[activePlayer] + currentscore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      score[activePlayer];

    if (score[activePlayer] >= 50) {
      dice.classList.add('hidden');
      gameNotOver = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.toggle('player--winner');

      document.querySelector(`.name--${activePlayer}`).classList.toggle('name');
    } else {
      switching();
    }
  }
});
NewGame.addEventListener('click', function () {
  dice.classList.add('hidden');
  scoreEl0.textContent = 0;
  scoreEl1.textContent = 0;
  currentSc0.textContent = 0;
  currentSc1.textContent = 0;
  let currentscore = 0;
  score[0] = 0;
  score[1] = 0;
  let activePlayer = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');

  document.querySelector(`.name--${activePlayer}`).classList.remove('name');
});
