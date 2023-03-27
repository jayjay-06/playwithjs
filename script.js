
const items = ["rock", "paper", "scissor"];
var playerSelect;
var yourscore=0;
var compscore=0;
function getComputerChoice(items) {
   
   return items[Math.floor(Math.random()*items.length)];
}


const labelclass = document.querySelector('.labelclass');
const notif = document.createElement('label');
notif.classList.add('notif');
labelclass.appendChild(notif);

function playRound(playerSelection, computerSelection) {
    score();
    computerSelection=getComputerChoice(items);
    playerSelect=playerSelection;
if(yourscore===5){

   alert("congratulatioins! you won \n press new game");
}
else if(compscore===5){
    alert("better luck next time, computers won  \n press new game");
}
else {
    if(playerSelect==="rock"){
        if(computerSelection=="paper"){
            notif.textContent="1 point for commputer";
            compscore++;
        }
        else if (computerSelection=="rock"){
            notif.textContent="its a tie, no point each"
        }
        else if (computerSelection=="scissor"){
            notif.textContent="1 point for you"
            yourscore++;
        }
    }
   else if(playerSelect=="paper"){
        if(computerSelection=="paper"){
            notif.textContent="its a tie, no point each"
        }
        else if (computerSelection=="rock"){
            notif.textContent="1 point for you"
            yourscore++;
        }
        else if (computerSelection=="scissor"){
            notif.textContent="1 point for commputer"
            compscore++;
        }
    }
    if(playerSelect=="scissor"){
        if(computerSelection=="paper"){
            notif.textContent="1 point for you"
            yourscore++;
        }
        else if (computerSelection=="rock"){
            notif.textContent="1 point for commputer"
            compscore++;
        }
        else if (computerSelection=="scissor"){
            notif.textContent="its a tie, no point each"
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
    score();
    
}

