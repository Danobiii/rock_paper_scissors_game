// function getComputerChoice(){
//     let computerChoice=["rock", "paper", "scissors"];
//     let randomIndex= Math.floor(Math.random()*computerChoice.length);
//     return computerChoice[randomIndex];
// }
// //console.log(getComputerChoice());
// function getHumanChoice(){
//     let userInput = prompt("Enter Rock, Paper or Scissors");
//     userInput = userInput.trim().toLowerCase();
//     alert(userInput);

//     if (userInput !== "rock" && userInput !== "paper" && userInput !== "scissors"){
//         alert("Invalid choice! Please enter Rock, Paper, or Scissors.")
//     }
//     return userInput;
// }
// //console.log(getHumanChoice());
// function playGame(){
//     let humanScore = 0;
//     let computerScore = 0;
// function playRound(humanChoice, computerChoice){
//    console.log("This is human choice", humanChoice, computerChoice);
//     if(humanChoice === computerChoice){
//         console.log("It's a tie!")
//     }
//     else if(
//         (humanChoice === "rock" && computerChoice === "scissors") ||
//         (humanChoice === "paper" && computerChoice === "rock") ||
//         (humanChoice === "scissors" && computerChoice === "paper")
//         )
//         {
//         console.log(`you win! ${humanChoice} beats ${computerChoice}!`);
//         humanScore++;
//     }
//     else{
//         console.log(`you lose! ${computerChoice} beats ${humanChoice}`);
//         computerScore++;
//     }
//     console.log(`score: you - ${humanScore}, computer - ${computerScore}`);
// }
// for(let i =0; i<5; i++){
//     console.log(`round ${i +1}`);
//  let humanChoice = getHumanChoice();
// let computerChoice = getComputerChoice();
// playRound(humanChoice, computerChoice);
//     //play 5 rounds
//     if(humanScore > computerScore){
//         console.log("congratulations! you won the game");
//     }
//     else if(humanScore < computerScore){
//         console.log("oops, you lost the game");
//     }
//     else{
//         console.log("it is a tie!, No winner");
//     }
// }}
// playGame();


//writing clean codes
// const generateUserGreeting = function(name){
//     const greeting ="Hello ";
//     return greeting + name;
    
// }
// console.log(generateUserGreeting("John"));
const click = document.querySelector("#btn");
click.addEventListener("click", () => {
    alert("Hello World!")
});
let newDiv = document.createElement("div");
newDiv.textContent = "Hello, I'm John!";
newDiv.classList.add("new-class");