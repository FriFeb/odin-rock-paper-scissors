const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";

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
  plays a single round of the game, it takes 2 parameters - 
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



    //    //    //    NEW ALGORITHM     \\    \\    \\

    playerSelection, computerSelection ---> /

      same logic as above but returns
        0 if user lose
        1 if user win
        2 if tie
      calls showRoundResult function

    / ---> result of the round

*/

function playRound(playerSelection, computerSelection) {
  let result;

  if (
    playerSelection === "ROCK" ||
    playerSelection === "Rock" ||
    playerSelection === "rock"
  )
    playerSelection = ROCK;
  else if (
    playerSelection === "PAPER" ||
    playerSelection === "Paper" ||
    playerSelection === "paper"
  )
    playerSelection = PAPER;
  else if (
    playerSelection === "SCISSORS" ||
    playerSelection === "Scissors" ||
    playerSelection === "scissors"
  )
    playerSelection = SCISSORS;
  else return "Wrong variant!";

  if (playerSelection === computerSelection) result = 2;

  if (playerSelection === ROCK) {
    result = computerSelection === PAPER ? 0 : 1;
  }

  if (playerSelection === PAPER) {
    result = computerSelection === SCISSORS ? 0 : 1;
  }

  if (playerSelection === SCISSORS) {
    result = computerSelection === ROCK ? 0 : 1;
  }

  showRoundResult(result, playerSelection, computerSelection);
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

      ELSE
        print "Tie!"

    /
*/

function showRoundResult(result, playerSelection, computerSelection) {
  if (result === 0) {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
  } else if (result === 1) {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
  } else {
    console.log("Tie!");
  }
}

/* 
game function 
  plays a 5 round game that keeps score 
  and reports a winner or loser at the end

    it takes computerSelection and playerSelection ---> /

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

    / ---> it shows the winner of the game with console.log()
*/

function game() {}

const playerSelection = prompt(
  "Enter your choice (rock, paper, scissors)",
  "Rock"
);
const computerSelection = getComputerChoice();
playRound(playerSelection, computerSelection);
