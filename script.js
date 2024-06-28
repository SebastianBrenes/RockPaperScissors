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
    let choiceContainer = document.querySelector('.container');
    choiceContainer.addEventListener('click', (event) => { // Event listener getting the option taken by the user

        let computerChoice = getComputerChoice(); // Computer choice his option

        let target = event.target;
        let humanChoice = target.id;
        console.log('Your choice is ' + target.id); 
        console.log('Computer choice is ' + computerChoice);

        let result = whoWonRound(computerChoice, humanChoice); 
        if (result !== "Tie! Choose again!") {
            console.log(result);
        } else {
            console.log(result);
        }
    })
}




let humanScore = 0;
let computerScore = 0;

playGame();