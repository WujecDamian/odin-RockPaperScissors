let humanScore = 0
let humanScoreElement = document.querySelector('#human__score')
let computerScore = 0
let computerScoreElement = document.querySelector('#computer__score')
let winnerElement = document.querySelector('#winner')
let humanChoice = document.querySelectorAll('.choice')
/* bot DOM */
let botPickSection = document.querySelector('.bot__pick')
let botImage = document.querySelector('#bot-image')
let botChoice = document.querySelector('#bot__h2')
/* Human picks DOM */
const humanRock = document.querySelector('.picks__item1')
const humanPaper = document.querySelector('.picks__item2')
const humanScissors = document.querySelector('.picks__item3')

function getComputerChoice () {
  let computerOutput = Math.floor(Math.random() * 3) + 1
  switch (computerOutput) {
    case 1:
      botPickSection.setAttribute('style', 'display:block')
      botImage.setAttribute('src', './images/rock.png')
      botChoice.innerText = 'Rock'
      botPickSection.addEventListener('animationend', event => {
        botPickSection.setAttribute('style', 'display:none')
      })
      return 'rock'
      break
    case 2:
      botPickSection.setAttribute('style', 'display:block')
      botImage.setAttribute('src', './images/paper.png')
      botChoice.innerText = 'Paper'

      botPickSection.addEventListener('animationend', event => {
        botPickSection.setAttribute('style', 'display:none')
      })
      return 'paper'
      break
    case 3:
      botPickSection.setAttribute('style', 'display:block')
      botImage.setAttribute('src', './images/scissors.png')
      botChoice.innerText = 'Scissors'

      botPickSection.addEventListener('animationend', event => {
        botPickSection.setAttribute('style', 'display:none')
      })
      return 'scissors'
      break
  }
}
humanChoice.forEach(e => {
  e.addEventListener('click', () => {
    if (e.classList.contains('picks__item1')) {
      playRound('rock', getComputerChoice())
    } else if (e.classList.contains('picks__item2')) {
      playRound('paper', getComputerChoice())
    } else if (e.classList.contains('picks__item3')) {
      playRound('scissors', getComputerChoice())
    }
  })
})

function playRound (humanChoice, computerChoice) {
  console.log(`You: ${humanChoice} | Bot: ${computerChoice}`)
  if (
    (humanChoice === 'rock' && computerChoice === 'rock') ||
    (humanChoice === 'paper' && computerChoice === 'paper') ||
    (humanChoice === 'scissors' && computerChoice === 'scissors')
  ) {
    console.log('You got the same one!')
  } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
    console.log(`You win! ${humanChoice} beats ${computerChoice}!`)
    humanScore++
  } else if (humanChoice === 'paper' && computerChoice === 'rock') {
    console.log(`You win! ${humanChoice} beats ${computerChoice}!`)
    humanScore++
  } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    console.log(`You win! ${humanChoice} beats ${computerChoice}!`)
    humanScore++
  } else {
    console.log(`You lost! ${computerChoice} beats ${humanChoice}!`)
    computerScore++
  }
  if (humanScore === 5) {
    winnerElement.innerText = 'You Won!'
    humanScoreElement.innerText = ''
    computerScoreElement.innerText = ''
    humanScore = 0
    computerScore = 0
  } else if (computerScore === 5) {
    winnerElement.innerText = 'Computer Won!'
    humanScoreElement.innerText = ''
    computerScoreElement.innerText = ''
    humanScore = 0
    computerScore = 0
  } else {
    winnerElement.innerText = ''
  }

  humanScoreElement.innerText = `Your Score: ${humanScore}`
  computerScoreElement.innerText = `Computer Score: ${computerScore}`
}

function getWinner () {
  if (humanScore > computerScore) {
    return 'You won!'
  } else if (computerScore > humanScore) {
    return 'Computer won!'
  } else {
    return 'Draw!'
  }
}
console.log(getWinner())
