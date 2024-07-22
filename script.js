function getComputerChoice(){
    const choice = ["rock","paper","scissors"]
    const random_choice = Math.floor(Math.random() * choice.length);
    return choice[random_choice]
}
let playerScore = 0;
let computerScore = 0;
let playerSelection



function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    computerChoice.innerText = `Computer Has Selected ${computerSelection}`;

    if(playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors"){ 
        return "User Error! Try again!";
    }
    else if (playerSelection === computerSelection){ 
        updateScore()
        return `It's a Tie! Player Score: ${playerScore}, Computer Score: ${computerScore}`;
    }
    else if((playerSelection === "rock" && computerSelection === "scissors")||
            (playerSelection === "paper" && computerSelection === "rock")||
            (playerSelection === "scissors" && computerSelection === "paper")){
                playerScore++;
                updateScore()
                return `You win! Player Score: ${playerScore}, Computer Score: ${computerScore}`;
    }
    else{
        computerScore++;
        updateScore()
        return `You Lose! Player Score: ${playerScore}, Computer Score: ${computerScore}`;
    }
  }
function updateScore(){
    score.innerText = `Player Score: ${playerScore}, Computer Score: ${computerScore}`
    checkWinner();
}

function checkWinner(){
    if (playerScore === 5) {
        alert("Congratulations! You won the game!");
        resetGame();
    } else if (computerScore === 5) {
        alert("Sorry! You lost the game.");
        resetGame();
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScore();
    userChoice.innerText = '';
    computerChoice.innerText = '';
}


const body = document.body


const rock = document.createElement("button")
rock.innerText = "Rock"
body.append(rock)

rock.addEventListener('click', function() {
    playerSelection = "rock";
    userChoice.innerText = "You Have Selected Rock";
    playRound(playerSelection)
});

const paper = document.createElement("button")
paper.innerText = "Paper"
body.append(paper)

paper.addEventListener('click',function(){
    playerSelection = "paper"
    userChoice.innerText = "You Have Selected Paper";
    playRound(playerSelection)
});

const scissors = document.createElement("button")
scissors.innerText = "Scissors"
body.append(scissors)

scissors.addEventListener('click', function(){
    playerSelection = "scissors"
    userChoice.innerText = "You Have Selected Scissors";
    playRound(playerSelection)
});

const userChoice = document.createElement('div')
body.append(userChoice)

const computerChoice = document.createElement("div")
body.append(computerChoice)

const score = document.createElement("div")
score.innerText = `Player Score: ${playerScore}, Computer Score: ${computerScore}`;
body.append(score)
