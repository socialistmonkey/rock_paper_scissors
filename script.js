
function getComputerChoice(){
    const choice = ["rock","paper","scissors"]
    const random_choice = Math.floor(Math.random() * choice.length);
    return choice[random_choice]
}

const ComputerChoice = getComputerChoice();
console.log(ComputerChoice);

let playerSelection = prompt("Rock, Paper or Scissors?");
playerSelection = playerSelection.toUpperCase()
console.log(playerSelection);