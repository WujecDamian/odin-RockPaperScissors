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
  console.log(humanChoice)
}
playRound(getHumanChoice(), getComputerChoice())
