let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    var randomNum = Math.floor(Math.random() * 3);
    console.log(randomNum);
    if(randomNum == 2){
        console.log("rock");
    }else if(randomNum == 1){
        console.log("paper");
    }else{
        console.log("scissors");
    }
    
}

getComputerChoice();

function getHumanChoice(){
    let person = prompt("Please enter your value","");
    console.log(person);
}

getHumanChoice();

function playRound(getHumanChoice,getComputerChoice){
    

}
playRound()