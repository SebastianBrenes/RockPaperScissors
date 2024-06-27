function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;

    switch (choice) {
        case 1:
            return "rock";

        case 2:
            return "paper";

        case 3:
            return "scissors";
    }
}

function getHumanChoice() {
    return prompt("What do you choose? (Rock, Paper or Scissors)");
}


function whoWonRound(computer, human) {
    human = human.toLowerCase();
    if (computer === "rock" && human === "rock" || computer === "paper" && human === "paper" || computer === "scissors" && human === "scissors") {
        return "Tie! Choose again!"
    } else if (computer === "rock" && human === "scissors" || computer === "paper" && human === "rock" || computer === "scissors" && human === "paper") {
        computerScore++;
        return "You Lose! Computer +1 point"
    } else if (computer === "rock" && human === "paper" || computer === "paper" && human === "scissors" || computer === "scissors" && human === "rock") {
        humanScore++;
        return "You Won! Human +1 point"
    } else {
        return "What did you wrote!??"
    }
}

function playGame() {
    for (let index = 1; index <= 5; index++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        console.log(whoWonRound(computerChoice, humanChoice)); 
    }
    if (humanScore > computerScore) {
        console.log("You Won the Game! Congrats!");
    } else {
        console.log("You lost! Try Again!");
    }
}




let humanScore = 0;
let computerScore = 0;

playGame();