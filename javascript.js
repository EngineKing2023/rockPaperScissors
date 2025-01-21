let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
     randomNum = Math.floor(Math.random() * 3);
    console.log(randomNum);
 
    if(randomNum == 2){
        console.log("rock");
        return "rock"
        
    }else if(randomNum == 1){
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
        console.log( "typo problem");
        getHumanChoice();
    }
}





  

    
 
  function playGame(times){

    console.log(times);
    
    
    if ( times > 0){
        
         

        function playRound(humanChoice, computerChoice) {

            

        if(humanChoice===computerChoice) {
            console.log("draw");
            humanScore = 0;
         computerScore = 0;
            
        } 
                else if (humanChoice === "paper" && computerChoice === "scissors"){
                        console.log("You lose! Scissors beats Paper");
                        computerScore++;
                        
        } 
                else if(humanChoice ==="rock" && computerChoice === "paper"){
                        console.log("You lose! Paper beats Rock");
                        computerScore++;
                        
        } 
                else if(humanChoice === "scissors" && computerChoice === "rock"){
                        console.log("You lose! Rock beats Scissors");
                        computerScore++;
                        
        }
                else {
                        console.log("you win");
                        humanScore++;
                        
        }
        }
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  playRound(humanSelection, computerSelection);
  console.log(humanScore,computerScore);
  

    }
times--;
console.log(times);
if(times>0){
playGame(times);
}

  }
  playGame(6);
  