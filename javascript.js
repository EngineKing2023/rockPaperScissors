let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
     computerScore = Math.floor(Math.random() * 3);
    console.log(computerScore);
 
    if(computerScore == 2){
        console.log("rock");
        return "rock"
        
    }else if(computerScore == 1){
        console.log("paper");
        return "paper"
    }else{
        console.log("scissors");
        return "scissors"
    }
    
}



function getHumanChoice(){
    
    let personInput = prompt("Please enter Rock, Paper or Scissors" ,"").toLowerCase();
    
     if(personInput ==="scissors"){
        return "scissors"
        
        
    } if(personInput ==="rock"){
        return "rock"
    } if(personInput ==="paper"){
       return "paper"
    }
    else{
        console.log( " typo problem");
    }
}



function playRound(humanChoice, computerChoice) {
if(humanChoice===computerChoice) {
    console.log("draw");
} else if (humanChoice === "paper" && computerChoice === "rock" ||
             humanChoice ==="rock" && computerChoice === "scissors" ||
            humanChoice === "scissors" && computerChoice === "paper"){
    console.log("you win");
}
else {
    console.log("you lose");
}
}
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  playRound(humanSelection, computerSelection);
  