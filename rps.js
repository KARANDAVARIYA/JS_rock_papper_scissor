// ********** ROCK PAPER SESSIORS GAME IN JS ********** //


// ***** 1. set variables for user and player ***** //
let userScore=0;
let compScore=0;

// *****  2. query selector thiiii badhiii j choices access  karavi ***** //
const choices=document.querySelectorAll(".choice");
//console.log(choices);


//***** 5. PARAGRAPH NI INSIDE MSG SHOW KARVA FIRST PARA NEE ACCESS KARYO *****//
const msg= document.querySelector("#msg");


// ***** USER SCORE AND COMPUTER SCORE NE ACCESS KARYO SCOREBOARD NO SCORE VADHARVA *****//
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

// ***** 3. GENERATE COMPUTER CHOICE FUNCTION ***** //
const genCompChoice=()=>{
const options=["rock","paper","scissors"];  // computer maate aray banavyo choice select karava maate
const randIdx=Math.floor(Math.random()*3);  // math in-built function no use karyo je thii computer random choice select karva..
return options[randIdx];
};

//***** GENERATE DRAW GAME FUNCTION  *****//
 const drawGame=()=>{
 //console.log("Game Was Draw.");
 msg.innerText="Game Was Draw.Play Again.";
 msg.style.backgroundColor="#081b31";
};

 
//***** GENERATE DRAW GAME FUNCTION  *****//

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){   
        userScore++; 
        userScorePara.innerText=userScore;                             // userscore++ karva use karyu operator // 
        //console.log("you win!");                // conditional statement no use karyo userwin thaay to win and lose thaay to lose //
        msg.innerText=`you win!  Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        //console.log("you lose");
        msg.innerText=`you lost! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
    }

}

// ***** 4. check condition ***** //
const playGame=(userChoice)=>{                  // playgame function ne khabar hase ke user ni choice su che //
    //console.log("user choice=", userChoice); 
    
    //COMPUTER CHOICE: //
    const compChoice=genCompChoice();           // function ne call back karyo variable declare kari ne... and value print karayvii..
    //console.log("comp choice=",compChoice);


    if(userChoice === compChoice){                  //Draw Game maate condition laykhi
    drawGame();                                 // drawgame function call karyu
    }else{
        let userWin=true;
        if(userChoice ==="rock"){
            // scissors or paper
            userWin=compChoice === "paper" ? false:true;
        }else if (userChoice==="paper"){
            //rock or scissor
            userWin=compChoice==="scissors"? false:true;
        }else{
            //rock or paper
            userWin=compChoice==="rock"? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};


choices.forEach((choice)=> {                        //foreach ni help thi ek ek choice na individiual div ne print karayaa //
       //console.log(choice);                       
    choice.addEventListener("click",()=>{           //ek ek div par addeventlistner no use kari choice click kariye atle choice was clicked print thaay //       
        
//***** GENERATE USERCHOICE FUNCTION *****// 
    const userChoice=choice.getAttribute("id");       // get attribute ni help thi choice ni id print karayvi //
      //console.log("choice was clicked",userChoice);
    playGame(userChoice);                            //playgame function call karyu because userchoice or user ae ek vaar choice select kari lidhi che...

     });
});
