
let playerScore = 0;
let computerScore = 0;



const getComputerChoice = () => {
    let randomChoice = ["rock", "paper", "scissors"];
    return randomChoice[Math.floor(Math.random() * randomChoice.length)];
}

const playSingleRound = (playerSelection, computerSelection) => {

    
    playerSelection = prompt("What is your choice?").toLowerCase();
    computerSelection = getComputerChoice();
     
    switch(true) {
        case (playerSelection === computerSelection):
            return `You both selected the same ${playerSelection}`;
            
            case (playerSelection === "rock" && computerSelection === "scissors" ||
            playerSelection === "paper" && computerSelection === "rock" ||
            playerSelection === "scissors" && computerSelection === "paper"):
            playerScore++;
            return `Player wins ${playerSelection} beats ${computerSelection}`;
            
            case (computerSelection === "rock" && playerSelection === "scissors" ||
            computerSelection === "paper" && playerSelection === "rock" ||
            computerSelection === "scissors" && playerSelection === "paper"):
            computerScore++;
            return `You lose computer choice ${computerSelection} beats ${playerSelection}`;
            
            default:
                return "an error has ocurred";
                
            }
        }
        


const game = () => {
    for (let i = 0; i < 5; i++){
        console.log(playSingleRound(i));
        console.log(`the player score is ${playerScore}`);
        console.log(`the computer score is ${computerScore}`);       
}
    if (playerScore > computerScore){
    console.log("You won!");
    } else if (playerScore < computerScore) {
    console.log("You lose! computer always win!");
    } else {
    console.log("Its a draw");
    }
}
    




game();

