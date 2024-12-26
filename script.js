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
    if (userChoice === 1 || userChoice === 2 || userChoice === 3) {
        return userChoice;
    }
    else {
        console.log('Please choose 1 2 or 3');
    }
}

function getCompChoice() {
    let compChoice = Number(Math.floor(Math.random() * 3) + 1);
    return compChoice;
}

function toDisplay(choice) {
    let output;
    // switch (choice)
    // {
    //     case 1:
    //         output = 'rock';
    //         break;
    //     case 2:
    //         output = 'paper';
    //         break;
    //     case 3:
    //         output = 'scissors';
    //         break;
    // }


    output = choice == 1 ? 'rock' :
    choice == 2 ? 'paper': 'scissors';
    return output;
}

let user = getUserChoice ();
console.log(user);


let computer = getCompChoice();
console.log(computer);



// let toShow = toDisplay(user);
// console.log(`You chose ${toShow}`);
// toShow = toDisplay(computer);
// console.log(`Computer chose ${toShow}`);


let result;

if (user === computer) {
    result = "tied";
}
else if (user === 1 && computer === 3) {
    result = "won";
}
else if (user === 2 && computer === 1) {
    result = "won";
}
else if (user === 3 && computer === 2) {
    result = "won";
}
else {
    result = "lost";
}

console.log(result);


// Score

