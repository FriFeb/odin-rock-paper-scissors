/*
getComputerChoice randomly returns either rock, paper or scissors
    it generates random number from 0 to 2 and returns the option
    corresponding to that number

*/
const ROCK = 'Rock';
const PAPER = 'Paper';
const SCISSORS = 'Scissors';

function getComputerChoice() {

    const choice = Math.floor(Math.random() * 3);

    switch(choice) {
        case 0:
            return ROCK;
        case 1:
            return PAPER;
        case 2:
            return SCISSORS;
    }
}

console.log(getComputerChoice());