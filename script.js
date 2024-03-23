// computer random choice
function getComputerChoice(){
    const choice = ["rock","paper","scissors"]
    const random_choice = Math.floor(Math.random() * choice.length);
    return choice[random_choice]
}
const computerSelection = getComputerChoice();
console.log(computerSelection);

let playerSelection = prompt("Rock, Paper or Scissors?");
playerSelection = playerSelection.toLowerCase()
console.log(playerSelection);

function playRound(playerSelection,computerSelection) {
    if(playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors"){ // throws out user error if they type something else
        return "User Error! Try again!";
    }
    else if (playerSelection === computerSelection){ //if theres a tie
        return "Tie!";
    }
    else if((playerSelection === "rock" && computerSelection === "scissors")||
            (playerSelection === "paper" && computerSelection === "rock")||
            (playerSelection === "scissors" && computerSelection === "paper")){
                return "You win!"
    }
    else{
        return "You Lose!"
    }
  }

  console.log(playRound(playerSelection, computerSelection));