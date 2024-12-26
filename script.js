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
    let output = choice === 1 ? 'rock' :
    choice === 2 ? 'paper': 'scissors';
    return output;
}

function userChoice() {
    let user = getUserChoice ();
    console.log(user);
    console.log(`You chose ${toDisplay(user)}`);
    return user;
}

function computerChoice() {
    let computer = getCompChoice();
    console.log(computer);
    console.log(`Computer chose ${toDisplay(computer)}`);
    return computer;
}

function decision(user, computer) {
    let result = user === computer ? "It's a tie!" 
    : (user === 1 && computer === 3) || (user === 2 && computer === 1) || (user === 3 && computer === 2) ? "You won!" 
    : "Sorry, you lost";

    console.log(result);
}

decision(userChoice(), computerChoice());


