function getComputerChoice(){
    const choice = ["rock","paper","scissors"]
    const random_choice = Math.floor(Math.random() * choice.length);
    return choice[random_choice]
}
let playerScore = 0;
let computerScore = 0;

function playRound() {
    const computerSelection = getComputerChoice();
    console.log(computerSelection);

    let playerSelection = prompt("Rock, Paper or Scissors?");
    playerSelection = playerSelection.toLowerCase()
    console.log(playerSelection);

    if(playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors"){ // throws out user error if they type something else
        return "User Error! Try again!";
    }
    else if (playerSelection === computerSelection){ //if theres a tie
        return `It's a Tie! Player Score: ${playerScore}, Computer Score: ${computerScore}`;
    }
    else if((playerSelection === "rock" && computerSelection === "scissors")||
            (playerSelection === "paper" && computerSelection === "rock")||
            (playerSelection === "scissors" && computerSelection === "paper")){
                playerScore++;
                return `You win! Player Score: ${playerScore}, Computer Score: ${computerScore}`;
    }
    else{
        computerScore++;
        return `You Lose! Player Score: ${playerScore}, Computer Score: ${computerScore}`;
    }
  }
  function playGame(){
    for(let i = 0; i < 5; i++){
        console.log(playRound());        
    }

    if(playerScore === computerScore){
        console.log("FINAL: It's a tie!");
    }
    else if (playerScore < computerScore){
        console.log("FINAL: You lost!");
    }
    else{
        console.log("FINAL: You won!");
    }
}

playGame();