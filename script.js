console.log('helu wort!')

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
  let humanInput = prompt()
}
console.log(getComputerChoice())
