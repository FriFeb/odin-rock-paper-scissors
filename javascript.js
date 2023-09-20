/*
getComputerChoice randomly returns either rock, paper or scissors.
    /

        generates random number from 0 to 2  

    / ---> it returns the option corresponding to that number
*/

const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";

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
playRound plays a single round of the game, it takes 2 parameters - 
the playerSelection and computerSelection - and then returns a string 
that declares the winner of the round like so: "You Lose! Paper beats Rock"
    it takes a string with playerSelection 
    (should be case-sensitive "Rock", "rock", "ROCk")
    and the result of computerSelection function ---> /   

        IF inputs are equal
            TRUE
                return "Tie!"

        ELSE IF playerSelection === "Rock" 
            IF computerSelection === "Paper"
                TRUE
                    return "You Lose! Paper beats Rock"
                ELSE 
                    return "You Win! Rock beats Scissors"

        ELSE IF playerSelection === "Paper" 
            IF computerSelection === "SCISSORS"
                TRUE
                    return "You Lose! Scissors beats Paper"
                ELSE 
                    return "You Win! Paper beats Rock"

        ELSE IF playerSelection === "Scissors" 
            IF computerSelection === "Rock"
                TRUE
                    return "You Lose! Rock beats Scissors"
                ELSE 
                    return "You Win! Scissors beats Paper"


        Seems like a lot of code and repetitions
        So, maybe it'd be better to optimize a bit 
        If we use number against strings 
        like "Rock" = 0, "Paper" = 1 and "Scissors" = 2
        We can simplify our conditions 

                0 < 1 < 2 < 0

        IF playerSelection === computerSelection
            TRUE
                return "Tie!"

        IF playerSelection < computerSelection
            IF playerSelection === 0 && computerSelection === 2
                TRUE
                    return "You Win! {playerSelection} beats {computerSelection}"
            TRUE
                return "You Lose! {computerSelection} beats {playerSelection}"

        IF playerSelection > computerSelection
            IF playerSelection === 2 && computerSelection === 0
                TRUE
                    return "You Lose! {playerSelection} beats {computerSelection}"
            TRUE
                return "You Win! {playerSelection} beats {computerSelection}"

        But I will stick to the first option for now

    / ---> it returns a string that declares the winner of the round 
    like so: "You Lose! Paper beats Rock"
    or: "You Win! Rock beats Scissors"
    or: "Tie!"
*/

function playRound(playerSelection, computerSelection) {
  if (
    playerSelection === "ROCK" ||
    playerSelection === "Rock" ||
    playerSelection === "rock"
  )
    playerSelection = ROCK;

  if (
    playerSelection === "PAPER" ||
    playerSelection === "Paper" ||
    playerSelection === "paper"
  )
    playerSelection = PAPER;

  if (
    playerSelection === "SCISSORS" ||
    playerSelection === "Scissors" ||
    playerSelection === "scissors"
  )
    playerSelection = SCISSORS;

  if (playerSelection === computerSelection) return "Tie!";

  if (playerSelection === ROCK) {
    return computerSelection === PAPER
      ? "You Lose! Paper beats Rock."
      : "You Win! Rock beats Scissors.";
  }

  if (playerSelection === PAPER) {
    return computerSelection === SCISSORS
      ? "You Lose! Scissors beats Paper."
      : "You Win! Paper beats Rock.";
  }

  if (playerSelection === SCISSORS) {
    return computerSelection === ROCK
      ? "You Lose! Rock beats Scissors."
      : "You Win! Scissors beats Paper.";
  }
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));