//code to track score
let playerScore =0;
let computerScore =0;
//function to get computer choice
function getComputerChoice(){
    const choices =["rock", "paper","scissors"];
    let randomIndex= Math.floor( Math.random()*choices.length );
    return choices[randomIndex];
}

// Function to get the human player's choice
function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    let resultDiv = document.getElementById("result");
    let scoreDiv = document.getElementById("score")
    if(humanChoice===computerChoice){
        resultDiv.textContent = `It is a tie! you both chose ${humanChoice}`;
        return;
    }
    let winner ="";
    if(
        (humanChoice === "rock" && computerChoice === "scissors")||
        (humanChoice === "paper" && computerChoice === "rock")||
        (humanChoice === "scissors" && computerChoice === "paper")  
    )
    {
        winner = "player"
       
        playerScore++
    }
    else{
        winner = "Computer"
        
        computerScore++
    }
    resultDiv.textContent = `${winner} wins! ${humanChoice} beats ${computerChoice}`;
    scoreDiv.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
    if(playerScore === 5){
        alert("you won the game")
        
        resetGame();
        // return;
    } else if(computerScore === 5)
    {
        alert("computer won the game")
        
        resetGame();
        // return;
    }
}
    function resetGame(){
        playerScore = 0;
        computerScore = 0;
        document.getElementById("score").textContent = "player : 0 | computer : 0";
        document.getElementById("result").textContent ="";
    }
    document.getElementById("rock_button").addEventListener("click", () => playRound("rock"));
    document.getElementById("paper_button").addEventListener("click", ()=> playRound("paper"));
    document.getElementById("scissors_button").addEventListener("click", () => playRound("scissors"));
   