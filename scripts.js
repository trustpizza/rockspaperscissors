let playerScore = 0;
let computerScore = 0;  
let roundResult;

const container = document.querySelector('#container'); 

const buttons = document.createElement('div'); // Populate buttons
buttons.classList.add('content');

container.appendChild(buttons);

const rock = document.createElement('button'); // Rock
rock.classList.add('button');
rock.textContent = 'rock';
rock.addEventListener('click', () => {
    playRound('rock', computerPlay());
})
buttons.appendChild(rock);


const paper = document.createElement('button'); // Paper
paper.classList.add('button')
paper.textContent = 'paper';
paper.addEventListener('click', () => {
    playRound('paper', computerPlay())
})
buttons.appendChild(paper);

const scissors = document.createElement('button'); // Scissors
scissors.classList.add('button');
scissors.textContent = 'scissors';
scissors.addEventListener('click', () => {
    playRound('scissors', computerPlay());
})
buttons.appendChild(scissors)

function computerPlay() { // Computer random choice
    let randomInt = (Math.floor(Math.random() * 3) +1);
    if(randomInt === 1) {
        return("rock");
    } else if (randomInt === 2) {
        return("paper");
    } else if (randomInt === 3) {
        return("scissors");
    } 
}

const scoreboard = document.createElement('div')
scoreboard.classList.add('score')
container.appendChild(scoreboard);

const playerScoreBoard = document.createElement('div'); // Creates a scoreboard for the player
playerScoreBoard.classList.add('scoreboard');
document.addEventListener('click', () => {
    playerScoreBoard.innerHTML = "<p> Your Score is " + playerScore + "</p>";

})
scoreboard.appendChild(playerScoreBoard);

const computerScoreBoard = document.createElement('div'); // Creates computer scoreboard
computerScoreBoard.classList.add('scoreboard');
document.addEventListener('click', () => {
    computerScoreBoard.innerHTML = "<p> Computer's Score is " + computerScore + "</p>";

})
scoreboard.appendChild(computerScoreBoard);

const results = document.createElement('div'); // Alert results Div
results.classList.add('results');
document.addEventListener('click', () => {
    if (roundResult == undefined) {
        results.innerHTML = "";
    } else{ 
    results.innerHTML = "<p>" + roundResult + "</p>";
    }
});
container.appendChild(results);


function playRound(playerSelection, computerSelection) { // Play a round of Rocks Paper Scissors
    if ((playerSelection === "rock") && (computerSelection === "scissors")) {
    roundResult = `You win! ${playerSelection} beats ${computerSelection}!`;
    playerScore++;
    gameEnd();
} else if ((playerSelection === "paper") && (computerSelection === "rock")) {
    roundResult = `You win! ${playerSelection} beats ${computerSelection}!`;
    playerScore++;
    gameEnd();
} else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
    roundResult = `You win! ${playerSelection} beats ${computerSelection}!`;
    playerScore++;
    gameEnd();
} else if ((playerSelection === "rock") && (computerSelection === "paper")) {
    roundResult = `You Lose! ${computerSelection} beats ${playerSelection}!`;
    computerScore++;
    gameEnd();
} else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
    roundResult = `You Lose! ${computerSelection} beats ${playerSelection}!`;
    computerScore++;
    gameEnd();
} else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
    roundResult = `You Lose! ${computerSelection} beats ${playerSelection}!`;
    computerScore++; 
    gameEnd();
} else if (playerSelection === computerSelection) {
    roundResult = "It's a Tie!";
} 
}


function gameEnd() {
    if (playerScore === 5) {
        let replayMessage = confirm("You Win! Would you like to play again?");
        if (replayMessage) {
            playerScore = 0;
            computerScore = 0;
        } 
    } else if (computerScore === 5) {
        let replayMessage = confirm("You Lose! Would you like to play again?");
        if (replayMessage) {
            playerScore = 0;
            computerScore = 0;
        }
    } 
}
