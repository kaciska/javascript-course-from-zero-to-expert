const check = document.querySelector('.check')
const message = document.querySelector('.message')
const score = document.querySelector('.score')
let scoreNumber = 20 // state variable

//Math.trunc()removes the decimals (does NOT round the number)
const secretNumber = Math.trunc(Math.random() * 20) + 1
document.querySelector('.number').textContent = secretNumber

check.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value) // default is string, we need number

  if (!guess) {
    message.textContent = 'Missing number!'
  } else if (guess === secretNumber) {
    message.textContent = 'Correct number!'
  } else if (guess > secretNumber) {
    if (scoreNumber > 1) {
      message.textContent = 'Too high!'
      scoreNumber--
      score.textContent = scoreNumber
    } else {
        message.textContent = "You lost the game!"
        score.textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (scoreNumber > 1) {
      message.textContent = 'Too low!'
      scoreNumber--
      score.textContent = scoreNumber
    } else {
        message.textContent = "You lost the game!"
        score.textContent = 0;
    }
  }
})
