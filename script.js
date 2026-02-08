let humanScore = 0
let computerScore = 0

function getComputerChoice () {
  let computerOutput = Math.floor(Math.random() * 3) + 1
  switch (computerOutput) {
    case 1:
      return 'rock'
      break
    case 2:
      return 'paper'
      break
    case 3:
      return 'scissors'
      break
  }
}
function getHumanChoice () {
  let humanInput = prompt('1-Rock, 2-Paper, 3-Scissors')
  humanInput = humanInput.toLowerCase()
  switch (humanInput) {
    case '1':
    case 'rock':
      return 'rock'
      break
    case '2':
    case 'paper':
      return 'paper'
      break
    case '3':
    case 'scissors':
      return 'scissors'
      break
  }
}

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
}
function playGame () {
  playRound(getHumanChoice(), getComputerChoice())
  console.log(`Your score: ${humanScore} || Computer score: ${computerScore}`)
  playRound(getHumanChoice(), getComputerChoice())
  console.log(`Your score: ${humanScore} || Computer score: ${computerScore}`)

  playRound(getHumanChoice(), getComputerChoice())
  console.log(`Your score: ${humanScore} || Computer score: ${computerScore}`)

  playRound(getHumanChoice(), getComputerChoice())
  console.log(`Your score: ${humanScore} || Computer score: ${computerScore}`)

  playRound(getHumanChoice(), getComputerChoice())
  console.log(`Your score: ${humanScore} || Computer score: ${computerScore}`)
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
}
playGame()
