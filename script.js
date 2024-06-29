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
    let textHumanScore = document.querySelector(".humanScore");
    let textComputerScore = document.querySelector(".computerScore");

    if (rounds == 0) { // checks if the 5 game rounds finished, then restarts the score
        textComputerScore.textContent = "Computer Score: " + 0;
        textHumanScore.textContent = "Human Score: " + 0;
    } 

    human = human.toLowerCase();
    if (computer === "rock" && human === "rock" || computer === "paper" && human === "paper" || computer === "scissors" && human === "scissors") {
        return "Tie! Choose again!"
    } else if (computer === "rock" && human === "scissors" || computer === "paper" && human === "rock" || computer === "scissors" && human === "paper") {
        computerScore++;
        rounds++;
        textComputerScore.textContent = "Computer Score: " + computerScore;
        return "You Lose! Computer +1 point"
    } else if (computer === "rock" && human === "paper" || computer === "paper" && human === "scissors" || computer === "scissors" && human === "rock") {
        humanScore++;
        rounds++;
        textHumanScore.textContent = "Human Score: " + humanScore;
        return "You Won! Human +1 point"
    }
}

function playGame() {    
    let choiceContainer = document.querySelector('.container');
    choiceContainer.addEventListener('click', (event) => { // Event listener getting the option taken by the user

        let computerChoice = getComputerChoice(); // Computer selects his option

        let target = event.target; // Human selects his optio
        let humanChoice = target.id;    

        let result = whoWonRound(computerChoice, humanChoice); 

        let resultsDiv = document.querySelector(".results"); 

        let logs = 'Round: ' + rounds +' Your choice is ' + target.id + '<br>Computer choice is ' + computerChoice + '<br><br>' + result + '<br><br>';

        if (rounds == 5) { // verifies the number of rounds played
            if (humanScore > computerScore) {
                logs = 'Round: ' + rounds +' Your choice is ' + target.id + '<br>Computer choice is ' + computerChoice + '<br><br>' + 'You won the Game!!' + '<br><br>';
            }
            else {
                logs = 'Round: ' + rounds +' Your choice is ' + target.id + '<br>Computer choice is ' + computerChoice + '<br><br>' + 'Computer won the Game!!' + '<br><br>';
            }
            rounds = 0;
            humanScore = 0;
            computerScore = 0;
        }
        resultsDiv.innerHTML = logs;
    })
}




let humanScore = 0;
let computerScore = 0;
let rounds = 0;

playGame();