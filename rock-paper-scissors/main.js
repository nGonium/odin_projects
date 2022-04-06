function computerPlay(){
    let seed = Math.floor(Math.random() * 3)
    let choice = {0: 'Rock', 1: 'Paper', 2: 'Scissors'}[seed]
    console.log(choice);
}

computerPlay()