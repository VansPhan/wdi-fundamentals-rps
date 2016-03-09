////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    return prompt("Please choose either 'rock', 'paper', or 'scissors'.");
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    var output;
    switch (move) {
        case "rock":
            output = "rock";
        break;
        case "paper":
            output = "paper";
        break;
        case "scissors":
            output = "scissors";
        break;
        default:
            output = getInput();
        break;
    }
    return output;
}

function getComputerMove(move) {
    var output;
    switch (move) {
        case "rock":
            output = "rock";
        break;
        case "paper":
            output = "paper";
        break;
        case "scissors":
            output = "scissors";
        break;
        default:
            output = getInput();
        break;
    }
    return output;
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove == "rock") {
        if (computerMove == "rock") {
            winner = "tie";
        }
        if (computerMove == "paper") {
            winner = "computer";
        }
        if (computerMove == "scissors") {
            winner = "player";
        }
    }
    if (playerMove == "paper") {
        if (computerMove == "rock") {
            winner = "player";
        }
        if (computerMove == "paper") {
            winner = "tie";
        }
        if (computerMove == "scissors") {
            winner = "computer";
        }
    }
    if (playerMove == "scissors") {
        if (computerMove == "rock") {
            winner = "computer";
        }
        if (computerMove == "paper") {
            winner = "player";
        }
        if (computerMove == "scissors") {
            winner = "tie";
        }
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var ties = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while (playerWins !== 5 && computerWins !== 5) {
        var winner = getWinner(getPlayerMove(getInput()),getComputerMove(randomPlay()));
        switch (winner) {
            case "player":
                playerWins += 1;
                alert("WIN! Wins: " + playerWins + " Losses: " + computerWins + " Ties: " + ties);

            break;
            case "computer":
                computerWins += 1;
                alert("LOSE! Wins: " + playerWins + " Losses: " + computerWins + " Ties: " + ties);
            break;
            case "tie":
                ties += 1;
                alert("TIE!  Wins: " + playerWins + " Losses: " + computerWins + " Ties: " + ties);
            break;
            default:
            break;
        }
    }
    if (playerWins > 4) {
        alert("VICTORY! : PLAYER");
        console.log("VICTORY! : PLAYER");
    }
    if (computerWins > 4) {
        alert("VICTORY! : COMPUTER");
        console.log("VICTORY! : COMPUTER");
    }

}

playToFive()




