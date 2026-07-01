const humanScoreText = document.querySelector("#human-score");
const computerScoreText = document.querySelector("#computer-score");

const humanChoiceText = document.querySelector("#human-choice");
const computerChoiceText = document.querySelector("#computer-choice");

const resultText = document.querySelector("#result");

const buttons = document.querySelectorAll(".choice-btn");
const resetBtn = document.querySelector("#reset");

let humanScore = 0;
let computerScore = 0;
let round = 0;

const emojis = {
    rock: "🪨",
    paper: "📄",
    scissors: "✂️"
};

// Pick a random move for the computer
function getComputerChoice() {

    const choices = ["rock", "paper", "scissors"];

    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}

// Play one round and update the scores
function playRound(humanChoice) {

    if (round >= 5) {
        return;
    }

    const computerChoice = getComputerChoice();

    humanChoiceText.textContent = emojis[humanChoice];
    computerChoiceText.textContent = emojis[computerChoice];

    if (humanChoice === computerChoice) {

        resultText.textContent = "🤝 It's a Tie!";

    }

    else if (

        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")

    ) {

        humanScore++;

        resultText.textContent = `🎉 You Win! ${humanChoice} beats ${computerChoice}`;

    }

    else {

        computerScore++;

        resultText.textContent = `💻 Computer Wins! ${computerChoice} beats ${humanChoice}`;

    }

    round++;

    humanScoreText.textContent = humanScore;
    computerScoreText.textContent = computerScore;

    // Show the final winner after 5 rounds
    if (round === 5) {

        if (humanScore > computerScore) {

            resultText.textContent = "🏆 Congratulations! You Won the Game!";

        }

        else if (computerScore > humanScore) {

            resultText.textContent = "💻 Computer Won the Game!";

        }

        else {

            resultText.textContent = "🤝 The Game Ended in a Draw!";

        }

    }

}

// Start a round when a choice button is clicked
buttons.forEach((button) => {

    button.addEventListener("click", () => {

        playRound(button.dataset.choice);

    });

});

// Reset everything to play again
resetBtn.addEventListener("click", () => {

    humanScore = 0;
    computerScore = 0;
    round = 0;

    humanScoreText.textContent = 0;
    computerScoreText.textContent = 0;

    humanChoiceText.textContent = "❔";
    computerChoiceText.textContent = "❔";

    resultText.textContent = "Choose your move!";

});