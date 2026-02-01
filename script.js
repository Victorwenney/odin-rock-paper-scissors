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

function getHumanChoice(){
    let hChoice = prompt("Welcome to Rock-Paper-Scissors!\nWhat do you want to play?");
    hChoice = hChoice.toUpperCase();
    return hChoice;
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === "ROCK" && computerChoice === "SCISSORS"){
        console.log("You win! " + humanChoice + " beats " + computerChoice +".");
        return 1;
    } else if(humanChoice === "PAPER" && computerChoice === "ROCK"){
        console.log("You win! " + humanChoice + " beats " + computerChoice +".");
        return 1;
    } else if(humanChoice === "SCISSORS" && computerChoice === "PAPER"){
        console.log("You win! " + humanChoice + " beats " + computerChoice +".");
        return 1;
    } else if(computerChoice === "ROCK" && humanChoice === "SCISSORS"){
        console.log("You lose! " + computerChoice + " beats " + humanChoice +".");
        return 2;
    } else if(computerChoice === "PAPER" && humanChoice === "ROCK"){
        console.log("You lose! " + computerChoice + " beats " + humanChoice +".");
        return 2;
    } else if(computerChoice === "SCISSORS" && humanChoice === "PAPER"){
        console.log("You lose! " + computerChoice + " beats " + humanChoice +".");
        return 2;
    } else{
        console.log("It's a draw! Both players played " + humanChoice +".");
        return 3;
    }
}

function playGame(){
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
}

playGame();


