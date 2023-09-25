const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";

let computerScore = 0,
  playerScore = 0,
  computerChoice,
  playerChoice;

const buttonList = document.querySelector(".buttons");
const roundResultDiv = document.querySelector(".results");
const playerScoreSpan = document.querySelector(".playerScore");
const computerScoreSpan = document.querySelector(".computerScore");

function getPlayerChoice(choice) {
  if (choice === "Rock") return ROCK;
  if (choice === "Paper") return PAPER;
  if (choice === "Scissors") return SCISSORS;
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
  let roundResult;

  if (playerChoice === ROCK) {
    roundResult = computerChoice === PAPER ? 0 : 1;
  }

  if (playerChoice === PAPER) {
    roundResult = computerChoice === SCISSORS ? 0 : 1;
  }

  if (playerChoice === SCISSORS) {
    roundResult = computerChoice === ROCK ? 0 : 1;
  }

  if (playerChoice === computerChoice) roundResult = 2;

  return roundResult;
}

function showRoundResult(roundResult) {
  if (roundResult === 0) {
    roundResultDiv.innerText = `You Lose! ${computerChoice} beats ${playerChoice}`;
  } else if (roundResult === 1) {
    roundResultDiv.innerText = `You Win! ${playerChoice} beats ${computerChoice}`;
  } else if (roundResult === 2) {
    roundResultDiv.innerText = "Tie!";
  } else {
    roundResultDiv.innerText = "Error!";
  }
}

function showUpdatedScore() {
  playerScoreSpan.innerText = playerScore;
  computerScoreSpan.innerText = computerScore;
}

function showGameResult() {
  if (playerScore > computerScore)
    roundResultDiv.innerText = `You Win the game!`;
  else if (playerScore < computerScore)
    roundResultDiv.innerText = `You Lose the game!`;
  else roundResultDiv.innerText = `Tie! Game is over`;
}

function playGame(e) {
  if (e.target.nodeName !== "BUTTON") return;

  playerChoice = getPlayerChoice(e.target.dataset.choice);
  computerChoice = getComputerChoice();

  const roundResult = playRound();
  showRoundResult(roundResult);

  if (roundResult === 0) computerScore++;
  if (roundResult === 1) playerScore++;

  showUpdatedScore();

  if (computerScore === 5 || playerScore === 5) {
    showGameResult();
    buttonList.removeEventListener("click", playGame);
  }
}

buttonList.addEventListener("click", playGame);