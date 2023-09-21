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
playGame function 
  plays a 5 round game that keeps score 

    computerSelection, playerSelection ---> /

      create playerScore and computerScore with value 0
      play 5 rounds
        - call playRound function 5 times
      keep score 
        - add +1 to userScore if user wins
        - add +1 to computerScore if computer wins
      call showGameResult()

    /
*/

function playGame() {
  let playerScore = 0,
    computerScore = 0;

  for (let i = 0; i < 5; i++) {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();

    const result = playRound();

    if (result === 0) computerScore++;
    else if (result === 1) playerScore++;
  }

  showGameResult(playerScore, computerScore);
}

/*
showGameResult

  playerScore, computerScore ---> {

    report a winner or loser 
      IF playerScore > computerScore
        TRUE
          print "You win the game!"
      ELSE IF playerScore < computerScore
        TRUE
          print "You lose the game!"
      ELSE 
        print "Tie!"

  } 
*/

function showGameResult(playerScore, computerScore) {
  console.log(`Score: ${playerScore} - ${computerScore}`);

  if (playerScore > computerScore) console.log(`You Win the game!`);
  else if (playerScore < computerScore) console.log(`You Lose the game!`);
  else console.log(`Tie!`);
}

playGame();
