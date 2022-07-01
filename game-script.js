'use strict';

function computerSelection(){
    let randomPlay = Math.floor(Math.random() * 3);

    if(randomPlay == 0){
        return 'rock'
    }

    else if(randomPlay == 1){
        return 'paper'
    }

    else if(randomPlay == 2){
        return 'scissors'
    }
}
    
function playerSelection(){
    
    let selection = 'none';

    while(selection != 'rock' && selection != 'paper' && selection != 'scissors')
    {
        selection = (prompt('Pick one: rock, paper, scissors'));
    }

    return selection.toLowerCase();
}

function playRound(playerSelection, computerSelection){

    if(playerSelection == computerSelection){
        return 'Its a Tie!';
    }

    else if(playerSelection == 'rock' && computerSelection == 'scissors'){
        playerScore++;
        return 'You Win! Rock beats Scissors';
    }

    else if(playerSelection == 'paper' && computerSelection == 'rock'){
        playerScore++;
        return 'You Win! Paper beats Rock';
    }

    else if(playerSelection == 'scissors' && computerSelection == 'paper'){
        playerScore++;
        return 'You Win! Scissor beats Paper';
    }

    else if(playerSelection == 'scissors' && computerSelection == 'rock'){
        computerScore++;
        return 'You Lose! Rock beats scissors';
    }

    else if(playerSelection == 'rock' && computerSelection == 'paper'){
        computerScore++;
        return 'You Lose! Paper beats Rock';
    }

    else if(playerSelection == 'paper' && computerSelection == 'scissors'){
        computerScore++;
        return 'You Lose! Scissors beats Paper';
    }

}

function game(){

    while(playerScore + computerScore < 3) {
            
        console.log(playRound(playerSelection(), computerSelection()));
        console.log(`Player points:${playerScore} Computer points:${computerScore}`);
     }

    playerScore > computerScore ? console.log('Player Wins!') : console.log('Computer Wins!');
}

let playerScore = 0;
let computerScore = 0;

game();
