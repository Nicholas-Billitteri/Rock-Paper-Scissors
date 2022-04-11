const result = document.querySelector(".result");
const playerScoreBoard = document.querySelector(".p-count");
const computerScoreBoard = document.querySelector(".c-count");


// Photos for the player
function picturerock() {
    var pic = "https://i.dlpng.com/static/png/6712737_preview.png";
    document.getElementById("bigpic").src = pic.replace("90x90", "225x225");
}
function picturepaper() {
    var pic = "http://assets.stickpng.com/images/5c434c10e39d5d01c21da943.png";
    document.getElementById("bigpic").src = pic.replace("90x90", "225x225");
}
function picturescissors() {
    var pic = "http://clipart-library.com/images/6Tpo9BaRc.png";
    document.getElementById("bigpic").src = pic.replace("90x90", "225x225");
}
// Photos for the Computer
function rockcomputer() {
    var pic = "https://i.dlpng.com/static/png/6712737_preview.png";
    document.getElementById("comppic").src = pic.replace("90x90", "225x225");
}
function papercomputer() {
    var pic = "http://assets.stickpng.com/images/5c434c10e39d5d01c21da943.png";
    document.getElementById("comppic").src = pic.replace("90x90", "225x225");
}
function scissorscomputer() {
    var pic = "http://clipart-library.com/images/6Tpo9BaRc.png";
    document.getElementById("comppic").src = pic.replace("90x90", "225x225");
}
// Complete logic of game inside this function
const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    const playGame = () => {
        const rockBtn = document.querySelector(".rock");
        const paperBtn = document.querySelector(".paper");
        const scissorBtn = document.querySelector(".scissor");
        const playerOptions = [rockBtn, paperBtn, scissorBtn];
        const computerOptions = ["rock", "paper", "scissors"];
        // Function to start playing game
        playerOptions.forEach((option) => {
            option.addEventListener("click", function () {
                const choiceNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[choiceNumber];
                if (computerChoice === "rock"){
                  rockcomputer()
                }
                else if (computerChoice === "paper"){
                  papercomputer();
                }
                else if (computerChoice === "scissor"){
                  scissorscomputer();
                }
                // Function to check who wins
                winner(this.innerText, computerChoice);
            });
        });
    };
    // function that i made to decide the winner
    const winner = (player, computer) => {

        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if (player === computer) {

            result.textContent = "You Tied With The Computer";
        } else if (player == "rock") {
            if (computer == "paper") {
                papercomputer();
                result.textContent = "The Computer Won The Match";
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                scissorscomputer()
                result.textContent = "The Player Won The Match";
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        } else if (player == "scissors") {
            if (computer == "rock") {
                rockcomputer()
                result.textContent = "The Computer Won The Match";
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                papercomputer()
                result.textContent = "The Player Won The Match";
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        } else if (player == "paper") {
            if (computer == "scissors") {
                scissorscomputer()
                result.textContent = "The Computer Won The Match";
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                rockcomputer()
                result.textContent = "The Player Won The Match";
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    };
    playGame();
};
game();
//function to reset Score
function resetscore() {
    let playerScore = 0;
    let computerScore = 0;
    playerScoreBoard.textContent = playerScore;
    computerScoreBoard.textContent = computerScore;
}
