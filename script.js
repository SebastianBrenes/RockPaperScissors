function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;

    switch (choice) {
        case 1:
            return "Rock";

        case 2:
            return "Paper";

        case 3:
            return "Scissors";
    }
}

function getHumanChoice() {
    return prompt("What do you choose? (Rock, Paper or Scissors)");
}


function whoWon(computer, human) {
    
}

// let computerChoice = getComputerChoice();
// let humanChoice = getHumanChoice();
// console.log(computerChoice + humanChoice);