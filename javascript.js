const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";

let playerSelection;
let computerSelection;

/*
getPlayerChoice

  {
  } ---> return result of validatePlayerChoice function call
*/

function getPlayerChoice() {
  return validatePlayerChoice(
    prompt("Enter your choice (rock, paper, scissors)", "Rock")
  );
}

/*
validatePlayerChoice

  player input from prompt ---> {
    
    IF input is not one of the valid options
      TRUE
        ask to input again
      FALSE 
        write that option to playerSelection

  }
*/

function validatePlayerChoice(input) {
  if (input === "ROCK" || input === "Rock" || input === "rock") return ROCK;
  if (input === "PAPER" || input === "Paper" || input === "paper") return PAPER;
  if (input === "SCISSORS" || input === "Scissors" || input === "scissors")
    return SCISSORS;

  validatePlayerChoice(
    prompt(
      "Check out the variants in parenthesis (rock, paper, scissors)",
      "Rock"
    )
  );
}

/*
getComputerChoice function 
  randomly returns either rock, paper or scissors.
    /

        generate random number from 0 to 2  
        choose the option corresponding to that number

    / ---> return the option
*/

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);

  switch (choice) {
    case 0:
      return ROCK;
    case 1:
      return PAPER;
    case 2:
      return SCISSORS;
  }
}

/*
playRound function

  playerSelection, computerSelection ---> /

    choose winner
      compare options
      0 if user lose
      1 if user win
      2 if tie
    calls showRoundResult function

  / ---> result of the round

*/

function playRound() {
  let result;

  if (playerSelection === ROCK) {
    result = computerSelection === PAPER ? 0 : 1;
  }

  if (playerSelection === PAPER) {
    result = computerSelection === SCISSORS ? 0 : 1;
  }

  if (playerSelection === SCISSORS) {
    result = computerSelection === ROCK ? 0 : 1;
  }

  if (playerSelection === computerSelection) result = 2;

  showRoundResult(result);
  return result;
}

/*
showRoundResult function 
  takes the result of playRound function
  and prints a winner or loser

    result of playRound function, playerSelection, computerSelection ---> /

      IF result === 0
        TRUE
          print "You Lose! {computerSelection} beats {playerSelection}"

      ELSE IF result === 1
        TRUE 
          print "You Win! {playerSelection} beats {computerSelection}"

      ELSE IF result === 2
        print "Tie!"

      ELSE
        print "Error!"

    /
*/

function showRoundResult(result) {
  if (result === 0) {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
  } else if (result === 1) {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
  } else if (result === 2) {
    console.log("Tie!");
  } else {
    console.log("Error!");
  }
}

/* 
game function 
  plays a 5 round game that keeps score 
  and reports a winner or loser at the end

    computerSelection, playerSelection ---> /

      play 5 rounds
        call playRound function 5 times
      keep score 
        - rewrite playRound function so it returns true 
        if user win and false if user lose
        - create showRoundResult function that prints 
        winner or loser of the round
        - create userScore and computerScore with value 0
        - add +1 to userScore if user wins
        - add +1 to computerScore if computer wins
      report a winner or loser 
        - IF userScore > computerScore
            TRUE
              print "You win the game!"
            FALSE
              print "You lose the game!"

    /
*/

function game() {
  for (let i = 0; i < 5; i++) {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();

    playRound();
  }
}

game();
