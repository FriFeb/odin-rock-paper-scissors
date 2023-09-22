const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";

let playerSelection;
let computerSelection;

function getPlayerChoice() {
  return validatePlayerChoice(
    prompt("Enter your choice (rock, paper, scissors)", "Rock")
  );
}

function validatePlayerChoice(input) {
  if (input === "ROCK" || input === "Rock" || input === "rock") return ROCK;
  if (input === "PAPER" || input === "Paper" || input === "paper") return PAPER;
  if (input === "SCISSORS" || input === "Scissors" || input === "scissors")
    return SCISSORS;

  return validatePlayerChoice(
    prompt(
      "Check out the variants in parenthesis (rock, paper, scissors)",
      "Rock"
    )
  );
}

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

function showGameResult(playerScore, computerScore) {
  console.log(`Score: ${playerScore} - ${computerScore}`);

  if (playerScore > computerScore) console.log(`You Win the game!`);
  else if (playerScore < computerScore) console.log(`You Lose the game!`);
  else console.log(`Tie!`);
}

playGame();
