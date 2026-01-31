
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
    let humanChoice = + prompt("Please enter the number for what you want to play:\n1 - Rock\n2 - Paper\n3 - Scissors");
    console.log(humanChoice);
    if(humanChoice === 1){  
        return "Rock";
    } else if(humanChoice === 2){
        return "Paper";
    } else{
        return "Scissors";
    }
}

console.log(getHumanChoice());
