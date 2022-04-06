let winConditions = {
    'Rock': 'Scissors',
    'Paper': 'Rock',
    'Scissors': 'Paper'
}

// Helper functions
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

function computerPlay(){
    let seed = Math.floor(Math.random() * 3)
    let selection = {0: 'Rock', 1: 'Paper', 2: 'Scissors'}[seed]
    return selection
}

function playerPlay(){
    let selection = capitalize(prompt("Choose: Rock, Paper, or Scissors?"))
    // Input verification, check if input in winConditions
    while(!(selection in winConditions)){
        selection = capitalize(prompt(`'${selection}' is not a valid choice. Choose: Rock, Paper, or Scissors?`))
    }
    return selection
}

// Round and game functions
function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return 'Draw'
    } else if (winConditions[playerSelection] === computerSelection){
        return 'Player wins'
    } else {
        return 'Computer wins'
    }
}

function game(){
    let score = 0
    let scores = {
        'Draw': 0,
        'Player wins': 1,
        'Computer wins': -1
    }
    
    for (let i = 0; i < 5; i++){
        let playerSelection = playerPlay()
        let computerSelection = computerPlay()
        let result = playRound(playerSelection, computerSelection)
        score += scores[result]
        console.log(
            `Player: ${playerSelection}`, 
            `\nCPU: ${computerSelection}`, 
            `\nRound: ${result}`,
            `\nScore: ${score}`, 
            sep='');
    }
    
    score > 0 ? console.log("You won the match!") :
    score == 0 ? console.log("Aw, draw!") :
    console.log("Sorry, you lost!")
}

// Main execution
game()