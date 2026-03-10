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

function playRound(humanChoice, computerChoice){
    if(humanChoice === "ROCK" && computerChoice === "SCISSORS"){
        resultSpace.textContent = "You win! " + humanChoice + " beats " + computerChoice +".";
        return 1;
    } else if(humanChoice === "PAPER" && computerChoice === "ROCK"){
        resultSpace.textContent = "You win! " + humanChoice + " beats " + computerChoice +".";
        return 1;
    } else if(humanChoice === "SCISSORS" && computerChoice === "PAPER"){
        resultSpace.textContent = "You win! " + humanChoice + " beats " + computerChoice +".";
        return 1;
    } else if(computerChoice === "ROCK" && humanChoice === "SCISSORS"){
        resultSpace.textContent = "You lose! " + computerChoice + " beats " + humanChoice +".";
        return 2;
    } else if(computerChoice === "PAPER" && humanChoice === "ROCK"){
        resultSpace.textContent = "You lose! " + computerChoice + " beats " + humanChoice +".";
        return 2;
    } else if(computerChoice === "SCISSORS" && humanChoice === "PAPER"){
        resultSpace.textContent = "You lose! " + computerChoice + " beats " + humanChoice +".";
        return 2;
    } else{
        resultSpace.textContent = "It's a draw! Both players played " + humanChoice +".";
        return 3;
    }
}

/*
    let humanScore = 0;
    let computerScore = 0;
    let result = 0;
    for (let i = 0; i < 5; i++){
        result = playRound(getHumanChoice(), getComputerChoice());
        switch (result){
            case 1:
                humanScore += 1;
                break;
            case 2:
                computerScore += 1;
                break;
            default:
                break;
        }
        console.log("Total score:\nUser: " + humanScore +"\nComputer: " + computerScore);
    }
*/

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
