
const items = ["rock", "paper", "scissor"];
var playerSelect;
var yourscore=0;
var compscore=0;
function getComputerChoice(items) {
   
   return items[Math.floor(Math.random()*items.length)];
}

function playRound(playerSelection, computerSelection) {
    score();
    computerSelection=getComputerChoice(items);
    playerSelect=playerSelection;
if(yourscore===5){
    console.log("congratulatioins! you won");
   alert("congratulatioins! you won \n press new game");
}
else if(compscore===5){
    console.log("better luck next time, computers won");
    alert("better luck next time, computers won");
}
else {
    if(playerSelect==="rock"){
        if(computerSelection=="paper"){
            console.log("1 point for commputer");
            compscore++;
            console.log(compscore);
        }
        else if (computerSelection=="rock"){
            console.log("its a tie, no point each");
        }
        else if (computerSelection=="scissor"){
            console.log("1 point for you");
            
            yourscore++;
            console.log(yourscore);
        }
    }
   else if(playerSelect=="paper"){
        if(computerSelection=="paper"){
            console.log("its a tie, no point each");
        }
        else if (computerSelection=="rock"){
            console.log("1 point for you");
            yourscore++;
            console.log(yourscore);
        }
        else if (computerSelection=="scissor"){
            console.log("1 point for computer");
            compscore++;
            console.log(compscore);
        }
    }
    if(playerSelect=="scissor"){
        if(computerSelection=="paper"){
            console.log("1 point for you");
            yourscore++;
            console.log(yourscore);
        }
        else if (computerSelection=="rock"){
            console.log("1 point for computer");
            compscore++;
            console.log(compscore);
        }
        else if (computerSelection=="scissor"){
            console.log("its a tie, no point each");
        }
    }

}

}
function score(){
    document.getElementById("lblyscore").innerText=yourscore;
    document.getElementById("lblcscore").innerText=compscore;
}
function newgame() {
  
    yourscore=0;
    compscore=0;
    console.clear();
    score();
    
}

