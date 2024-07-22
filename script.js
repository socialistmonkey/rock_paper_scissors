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

const body = document.body


const rock = document.createElement("button")
rock.innerText = "Rock"
body.append(rock)

rock.addEventListener('click', function() {
    playerSelection = "rock";
    resultDisplay.innerText = "You Have Selected Rock";
});

const paper = document.createElement("button")
paper.innerText = "Paper"
body.append(paper)

paper.addEventListener('click',function(){
    playerSelection = "paper"
    resultDisplay.innerText = "You Have Selected Paper";
});

const scissors = document.createElement("button")
scissors.innerText = "Scissors"
body.append(scissors)

scissors.addEventListener('click', function(){
    playerSelection = "scissors"
    resultDisplay.innerText = "You Have Selected Scissors";
});

const resultDisplay = document.createElement('div')
body.append(resultDisplay)


playGame();

// current issue is that its not comparing playerselection to computer selection for some reason i dont understand why, will try redownloading the old versoin back and comparing what went wrong