function getComputerChoice(){
    const choices =["Rock", "Paper","scissors"];
    let randomIndex= Math.floor( Math.random()*choices.length );
    return choices[randomIndex];
}
// console.log(getComputerChoice());
// Function to get the computer's choice


// Function to get the human player's choice
function getHumanChoice() {
    let choice = prompt("Enter Rock, Paper, or Scissors:");
    choice = choice.trim().toLowerCase(); // Remove spaces and make lowercase

    // Validate input using if statements
    if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        alert("Invalid choice! Please enter Rock, Paper, or Scissors.");
        //return getHumanChoice(); // Ask again until a valid input is given
    }

   // return choice;
}

// Function to play a single round
function playRound(humanChoice, computerChoice) {
    console.log("You chose: " + humanChoice);
    console.log("Computer chose: " + computerChoice);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return "tie";
    }

    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors");
            return "human";
        } else {
            console.log("You lose! Paper beats Rock");
            return "computer";
        }
    }

    if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win! Paper beats Rock");
            return "human";
        } else {
            console.log("You lose! Scissors beats Paper");
            return "computer";
        }
    }

    if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            console.log("You win! Scissors beats Paper");
            return "human";
        } else {
            console.log("You lose! Rock beats Scissors");
            return "computer";
        }
    }
}

// Function to play the game (Best of 5 rounds)
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    console.log("Welcome to Rock, Paper, Scissors! Best of 5 rounds!");

    let round = 1;
    while (round <= 5) {
        console.log("Round " + round + ":");
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let roundWinner = playRound(humanChoice, computerChoice);

        if (roundWinner === "human") {
            humanScore++;
        } else if (roundWinner === "computer") {
            computerScore++;
        }

        console.log("Score - You: " + humanScore + ", Computer: " + computerScore);
        round++;
    }

    console.log("Final Score:");
    console.log("You: " + humanScore + " - Computer: " + computerScore);

    if (humanScore > computerScore) {
        console.log("🎉 Congratulations! You won the game! 🎉");
    } else if (humanScore < computerScore) {
        console.log("😢 You lost the game. Better luck next time! 😢");
    } else {
        console.log("It's a draw! 🤝");
    }
}

// Start the game
playGame();



