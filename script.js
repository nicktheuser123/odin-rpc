 
let buttons = document.querySelectorAll(".options");
let results = document.querySelector("#results");

buttons.forEach(btn =>{
    btn.addEventListener("click", ()=> {
        playRound(btn.textContent);
    })
})

function addResult(text){
    let newResult = document.createElement("p")
    newResult.textContent = text;
    // console.log(results)   
    results.appendChild(newResult);
}

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


    //variable to keep track of human score
    let humanScore = 0;

    //variable to keep track of computer score
    let computerScore = 0;
    let humanSelection;
    let computerSelection;

        function playRound(humanChoice, computerChoice){
        //set variable with parameters for human choice case insensitive
        let humanChoiceLowercase =  humanChoice.toLowerCase();
        computerChoice = getComputerChoice();
        //create variable to store the correct answer
        let correctAnswer;        

        //check winner
            if((humanChoiceLowercase === "rock" && computerChoice === "scissors") || humanChoiceLowercase === "scissors" && computerChoice === "rock"){
                
                correctAnswer = "rock";
            }
            else if((humanChoiceLowercase === "scissors" && computerChoice === "paper") || humanChoiceLowercase === "paper" && computerChoice === "scissors"){
            //If paper and scissors set correct answer scissors
                    
                    correctAnswer = "scissors";
                }
            else if((humanChoiceLowercase === "rock" && computerChoice === "paper") || humanChoiceLowercase === "paper" && computerChoice === "rock"){
                //If rock and paper set correct answer paper
                    
                    correctAnswer = "paper";
                }
            else{
                //If both inputs are the same then return with tie
                addResult("TIE ROUND");    
                return;
                }


            if (correctAnswer === humanChoiceLowercase){
                //If correct answer is User return winner user 
                ++humanScore;
                addResult("textContent", `You Win!, ${humanChoiceLowercase} beats ${computerChoice}`);
            } else{
                //If If correct answer is computer return winner computer
                ++computerScore;
                addResult("textContent",`You Lose!, ${computerChoice} beats ${humanChoiceLowercase}`);
            }
            addResult(`-----ROUND END-----`);
            addResult(`SCORES: YOU = ${humanScore} vs COMPUTER = ${computerScore}  `);

            if(humanScore === 5 || computerScore === 5){
        addResult(`-----GAME OVER-----`);
        addResult(`FINAL SCORES: YOU = ${humanScore} vs COMPUTER = ${computerScore}  `);

        if(humanScore > computerScore){
            addResult(`-----YOU WIN GAME-----`);    
        }else if (humanScore === computerScore){
            addResult(`-----TIE GAME-----`);    
        } else {
            addResult(`-----YOU LOSE GAME-----`); 
        }
        humanScore = 0
        computerScore = 0
        results.innerHTML = "";
    }


        }

    // for (let i = 0; i < 5 ; i++){
    //     console.log(`-----NEW ROUND-----`);
    //     humanSelection = getHumanChoice();
    //     
        
    //     console.log("Computer Choice - ", computerSelection);
    //     console.log("Human Choice - ", humanSelection);
        
    //     playRound(humanSelection,computerSelection)
    // } 
    





// playGame()