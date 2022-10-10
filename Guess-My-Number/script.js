const check = document.querySelector('.check')
const replay = document.querySelector('.again')
const score = document.querySelector('.score')
let number = document.querySelector('.number')
let scoreNumber = 20 // state variable
let highscoreNumber = 0 // state variable

//Math.trunc()removes the decimals (does NOT round the number)
const secretNumber = Math.trunc(Math.random() * 20) + 1

check.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value) // default is string, we need number

  const displayMessage = function (message) {
    // function with parameter (message)
    document.querySelector('.message').textContent = message
  }

  // no input
  if (!guess) {
    displayMessage('Missing number!')

  // player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct number!')

    number.textContent = secretNumber
    document.querySelector('body').style.backgroundColor = '#60b347'
    number.style.width = '30rem'

    // check highscore
    if (scoreNumber > highscoreNumber) {
      highscoreNumber = scoreNumber

      localStorage.setItem('highscoreNumber', highscoreNumber)
      document.querySelector('.highscore').innerHTML =
        localStorage.getItem('highscoreNumber')
    }

  // guess is too high OR too low
  } else if (guess !== secretNumber) {
    if (scoreNumber > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!')
      scoreNumber--
      score.textContent = scoreNumber
    } else {
      message.textContent = 'You lost the game!'
      score.textContent = 0
    }
  }
})

// replay the game
replay.addEventListener('click', function () {
  window.location.reload()
})

// set highscore
window.onload = function () {
  document.querySelector('.highscore').innerHTML =
    window.localStorage.getItem('highscoreNumber')
}

// Clear localstorage
// localStorage.clear();