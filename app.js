let userscore =0;
let compScore =0;
const choices =document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = ( ) =>{
    const options =["rock","paper","scissors"];
    const randIdx =Math.floor(Math.random() *3 );
    return options[randIdx];
};
const drawGame = () =>{
    msg.innerText="DRAW";
};
const winResult=(userWin,userChoice,compChoice)=>{
if(userWin){
    userscore++;
    userScorePara.innerText = userscore;
    msg.innerText="YOU WIN !";
    msg.style.backgroundColor = "green";
  
}
else{
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText="YOU lOOSE !   ";
    msg.style.backgroundColor = "red";

}
};


const playGame =(userChoice)=>{
const compChoice = genCompChoice();
if (userChoice === compChoice){
    drawGame();
}
else{
    let userWin= true;
    if(userChoice === "paper"){
        userWin = compChoice === "scissors" ? false:true;
    }
    else if(userChoice === "scissors"){
        userWin = compChoice === "rock" ?false:true;
    }
    else{
        userWin = compChoice ==="scissors"?false:true;
    }
    winResult(userWin,userChoice,compChoice);
}

};

choices.forEach((choice)=> {
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);

    });

}); 