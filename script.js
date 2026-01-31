
function getComputerChoice(){
    let computerChoice = Math.trunc((Math.random() * 100)) % 3;
    if(computerChoice === 0){
        return "Rock";
    } else if(computerChoice === 1){
        return "Paper";
    } else{
        return "Scissors";
    }
}

console.log(getComputerChoice());

function getHumanChoice(){
    let humanChoice = prompt("Welcome to Rock-Paper-Scissors!\nWhat do you want to play?");
    return humanChoice;
}

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;


