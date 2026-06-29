function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);

    if (num === 0) {
        return "rock";
    } else if (num === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Enter Rock, Paper or Scissors:");
    return humanChoice.toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        if (humanChoice === computerChoice) {
            console.log("It's a Tie!");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else {
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }

        console.log(`Score -> You: ${humanScore} | Computer: ${computerScore}`);
    }

    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}`);

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    console.log("========== FINAL RESULT ==========");

    if (humanScore > computerScore) {
        console.log("🎉 You Won the Game!");
    } else if (computerScore > humanScore) {
        console.log("💻 Computer Won the Game!");
    } else {
        console.log("🤝 The Game is a Draw!");
    }
}

playGame();