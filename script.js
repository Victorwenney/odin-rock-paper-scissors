function getComputerChoice(){
    let compChoice = Math.trunc((Math.random() * 100)) % 3;
    if(compChoice === 0){
        return "ROCK";
    } else if(compChoice === 1){
        return "PAPER";
    } else{
        return "SCISSORS";
    }
}

let humanScore = 0;
let computerScore = 0;
let round = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice === "ROCK" && computerChoice === "SCISSORS"){
        humanScore += 1;
        runningScore.textContent = "User: " + humanScore +" Computer: " + computerScore;
        round += 1;
        resultSpace.textContent = "You win! " + humanChoice + " beats " + computerChoice +".";
    } else if(humanChoice === "PAPER" && computerChoice === "ROCK"){
        resultSpace.textContent = "You win! " + humanChoice + " beats " + computerChoice +".";
        humanScore += 1;
        round += 1;
        runningScore.textContent = "User: " + humanScore +" Computer: " + computerScore;
    } else if(humanChoice === "SCISSORS" && computerChoice === "PAPER"){
        resultSpace.textContent = "You win! " + humanChoice + " beats " + computerChoice +".";
        humanScore += 1;
        round += 1;
        runningScore.textContent = "User: " + humanScore +" Computer: " + computerScore;
    } else if(computerChoice === "ROCK" && humanChoice === "SCISSORS"){
        resultSpace.textContent = "You lose! " + computerChoice + " beats " + humanChoice +".";
        computerScore += 1;
        round += 1;
        runningScore.textContent = "User: " + humanScore +" Computer: " + computerScore;
    } else if(computerChoice === "PAPER" && humanChoice === "ROCK"){
        resultSpace.textContent = "You lose! " + computerChoice + " beats " + humanChoice +".";
        computerScore += 1;
        round += 1;
        runningScore.textContent = "User: " + humanScore +" Computer: " + computerScore;
    } else if(computerChoice === "SCISSORS" && humanChoice === "PAPER"){
        resultSpace.textContent = "You lose! " + computerChoice + " beats " + humanChoice +".";
        computerScore += 1;
        round += 1;
        runningScore.textContent = "User: " + humanScore +" Computer: " + computerScore;
    } else{
        round += 1;
        resultSpace.textContent = "It's a draw! Both players played " + humanChoice +".";
        runningScore.textContent = "User: " + humanScore +" Computer: " + computerScore;
    }
    if(round === 5){
        document.body.removeChild(btnRock);
        document.body.removeChild(btnPaper);
        document.body.removeChild(btnScissors);
        if(humanScore > computerScore){
            resultSpace.textContent = "The User WON!"
        } else if(computerScore > humanScore){
            resultSpace.textContent = "The Computer WON!"
        } else{
            resultSpace.textContent = "It was a DRAW!"
        } 
    }
}

const btnRock = document.createElement('button');
btnRock.textContent = 'Rock';
btnRock.addEventListener("click", () => playRound("ROCK", getComputerChoice()));

const btnPaper = document.createElement('button');
btnPaper.textContent = 'Paper';
btnPaper.addEventListener("click", () => playRound("PAPER", getComputerChoice()));

const btnScissors = document.createElement('button');
btnScissors.textContent = 'Scissors';
btnScissors.addEventListener("click", () => playRound("SCISSORS", getComputerChoice()));

document.body.appendChild(btnRock);
document.body.appendChild(btnPaper);
document.body.appendChild(btnScissors);

const resultSpace = document.createElement('div');
document.body.appendChild(resultSpace);

const runningScore = document.createElement('div');
runningScore.textContent = "User: " + humanScore +" Computer: " + computerScore;
document.body.appendChild(runningScore);



