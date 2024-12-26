// RPS
// display choice of rock paper or scissors
// ask user to input choice
// store user choice
// generate random choice of rock paper or scissors
// store random choice
// compare user choice (uc) with random choice (rc)
// user win conditions:
// 1. uc is rock and rc is scissors
// 2. uc is paper and rc is rock
// 3. uc is scissors and rc is paper
// all else results in loss
// if same, it is a tie
// else compare win conditions
// else loss

let humanScore = 0;
let computerScore = 0;

function getUserChoice() {
    console.log("Rock Paper Scissors");
    let userChoice = Number(prompt("Choose:\n1 (rock)\n2 (paper)\n3 (scissors)"));
    //Insert limitation inside getUserChoice function to ensure only acceptable choices are returned
    let wrongChoice = true;
    while (wrongChoice) {
        if (userChoice === 1 || userChoice === 2 || userChoice === 3) {
            wrongChoice = false;
            return userChoice;
        }
        else {
            userChoice = Number(prompt("Please choose 1 2 or 3:\n1 (rock)\n2 (paper)\n3 (scissors)"));
        }
    }
}

function getCompChoice() {
    let compChoice = Number(Math.floor(Math.random() * 3) + 1);
    return compChoice;
}

function toDisplay(choice) {
    //Function to show user what choices were made (improves user experience)
    let output = choice === 1 ? 'rock' :
    choice === 2 ? 'paper': 'scissors';
    return output;
}

function userChoice() {
    let user = getUserChoice();
    // console.log(user);
    console.log(`You chose ${toDisplay(user)}`);
    return user;
}

function computerChoice() {
    let computer = getCompChoice();
    // console.log(computer);
    console.log(`Computer chose ${toDisplay(computer)}`);
    return computer;
}

function decision(user, computer) {
    let winMessage = "You won!";
    let lostMessage = "Sorry, you lost";
    let tieMessage = "It's a tie!";
    let output;

    // let output = user === computer ? tieMessage 
    // : (user === 1 && computer === 3) || (user === 2 && computer === 1) || (user === 3 && computer === 2) ? winMessage
    // : lostMessage;
    // console.log(output);

    if (user === computer) {
        output = tieMessage;
    }
    else if ((user === 1 && computer === 3) || (user === 2 && computer === 1) || (user === 3 && computer === 2)) {
        humanScore++;
        output = winMessage;
    }

    else {
        computerScore++;
        output = lostMessage;
    }
    console.log(output);
}

// decision(userChoice(), computerChoice());

// Add playRound function



function playGame() {
    function playRound() {
        decision(userChoice(), computerChoice());
        console.log(`Player: ${humanScore}\nComputer: ${computerScore}`);
    }
    let gameRounds = 5;

    for (let i = 1; i <= gameRounds; i++) {
        playRound();
    }  
}

playGame();
