'use strict';

const dice = document.querySelector('.dice');

const playerEl0 = document.querySelector('.player--0');
const playerEl1 = document.querySelector('.player--1');

let mainScore0 = document.getElementById('score--0');
let mainScore1 = document.getElementById('score--1');

const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');

const rollDiceBtn = document.querySelector('.btn--roll');
const holdDiceBtn = document.querySelector('.btn--hold');
const newGameBtn = document.querySelector('.btn--new');

let scores, playing, activePlayer, currentScore; // need to be declared outside the init function because of function scope

const init = function () {
  // hide dice on the beginnig of the game
  dice.classList.add('hidden');

  // hold score of both players
  scores = [0, 0];
  mainScore0.textContent = 0;
  mainScore1.textContent = 0;
  // default value of playing game
  playing = true;
  // default state od active player
  activePlayer = 0;
  // default score
  currentScore = 0;

  currentScore0.textContent = 0;
  currentScore1.textContent = 0;

  playerEl1.classList.remove('player--active');
  playerEl0.classList.add('player--active');

  playerEl0.classList.remove('player--winner');
  playerEl1.classList.remove('player--winner');
};

init();

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; // change active player

  playerEl0.classList.toggle('player--active'); //toggle active class -> change color background
  playerEl1.classList.toggle('player--active');
};

rollDiceBtn.addEventListener('click', () => {
  if (playing) {
    let diceNumber = Math.trunc(Math.random() * 6) + 1;

    dice.src = `dice-${diceNumber}.png`;
    dice.classList.remove('hidden');

    if (diceNumber !== 1) {
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

holdDiceBtn.addEventListener('click', () => {
  if (playing) {
    scores[activePlayer] += currentScore; // set score for active player to array
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer]; // set main score of active player

    if (scores[activePlayer] >= 10) {
      playing = false;
      dice.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    } else {
      switchPlayer();
    }
  }
});

newGameBtn.addEventListener('click', init);
