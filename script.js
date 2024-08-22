let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const user_score=document.querySelector("#user-score");
const comp_score=document.querySelector("#comp-score");


const gencompchoice= () =>{
 const options=["rock","paper","scissors"]
 const randomindex = Math.floor(Math.random() * 3);
 return options[randomindex];
;
}
const drawgame=()=>{
    console.log("It's A Draw")
    msg.innerText="It's A Draw";
    msg.style.backgroundColor="#081b31";
}
const showwinner=(userwin)=>{
    if(userwin){
        userscore++;
        user_score.innerText=userscore;
        console.log("you win");
        msg.innerText="You Win!!"
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        comp_score.innerText=compscore;
        console.log("you lose");
        msg.innerText="You Lose";
        msg.style.backgroundColor="red";
    }

}

const playgame=(userChoice) =>{
console.log("user choice = ", userChoice); //[modular programming is nothing but 
// dividig the work into the different different functions] 
 
// generate computer choice  
 const compChoice=gencompchoice();
 console.log("computer choice = ", compChoice)
  if (userChoice===compChoice){

    drawgame();

  }else{
    let userwin=true;
    if(userChoice==="rock"){
        // scissors,paper
        userwin= compChoice==="paper" ? false : true;
    }
     else if( userChoice==="paper"){
        userwin=compChoice==="scissors" ? false : true;

     } 
     else{
        userwin = compChoice==="rock" ? false:true;
     }
     
     showwinner(userwin);
  }


}

 choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice  =choice.getAttribute("id");
      //  console.log("choice was clicked",userChoice);
        playgame(userChoice);

    });
 });