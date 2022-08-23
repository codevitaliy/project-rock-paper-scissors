
let randomChoice = ["Rock", "Paper", "Scissors"];

const getComputerChoice = () => {
    let randomChoice = ["rock", "paper", "scissors"];
    return randomChoice[Math.floor(Math.random() * randomChoice.length)];
}
let playerSelection = "rock".toLowerCase();
let computerSelection = getComputerChoice();
// console.log(playerSelection);


const playSingleRound = (playerSelection, computerSelection) => {

    switch(true) {
        case (playerSelection === computerSelection):
        return `You both selected the same ${playerSelection}`;
        
        case (playerSelection === "rock" && computerSelection === "scissors" ||
              playerSelection === "paper" && computerSelection === "rock" ||
              playerSelection === "scissors" && computerSelection === "paper"):
        return `Player wins ${playerSelection} beats ${computerSelection}`;
        
        case (computerSelection === "rock" && playerSelection === "scissors" ||
              computerSelection === "paper" && playerSelection === "rock" ||
              computerSelection === "scissors" && playerSelection === "paper"):
        return `Computer wins ${computerSelection} beats ${playerSelection}`;

        default:
            return "an error has ocurred";
    
    }
}

// console.log(playSingleRound(playerSelection, computerSelection));

for (let i = 0; i < 5; i++) {
    playSingleRound(playerSelection, computerSelection);
    console.log(playSingleRound(playerSelection, computerSelection))
}

console.log(playSingleRound());