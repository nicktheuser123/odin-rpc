 

function getComputerChoice() {

    // create variable with random number
    let randomNumber = Math.random();

    //  if number is less than 0.33 return rock
    if (randomNumber > 1/3){

        return "rock";

    } else if(randomNumber > 1/3 && randomNumber < 2/3 ){
    //  if the number is between 0.33 and 0.66 return paper

        return "paper";

    } else {

        return "scissors";

    }
    //  if the number is greater than 0.66 return scissors

}

function getHumanChoice(){
    //show prompt for user choice, asking for string and assign it to a variable
    userInput = prompt("Enter any one of the following options: rock, paper or scissors");
    //return the users choice as a string
    return userInput;
}

console.log("Computer Choice - ", getComputerChoice());
console.log("Human Choice - ", getHumanChoice());