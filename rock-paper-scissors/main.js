let winCondition = {
    'Rock': 'Scissors',
    'Paper': 'Rock',
    'Scissors': 'Paper'
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

function computerPlay(){
    let seed = Math.floor(Math.random() * 3)
    let choice = {0: 'Rock', 1: 'Paper', 2: 'Scissors'}[seed]
    return choice
}

function playRound(playerSelection, computerSelection){
    let result = 'unknown'
    if (playerSelection === computerSelection){
        return 'draw'
    } else if (winCondition[playerSelection] === computerSelection){
        return 'Player wins'
    } else {
        return 'Computer wins'
    }
}

function play(){
    playerSelection = capitalize(prompt("Choose: Rock, Paper, or Scissors?"))
    computerSelection = computerPlay()
    let roundResult = playRound(playerSelection, computerSelection)

    console.log(
        `Player: ${playerSelection}`, 
        `\nCPU: ${computerSelection}`, 
        `\nRound: ${roundResult}`, 
        sep='');
}

play()