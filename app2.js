let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgame=document.querySelector("#newgame");
let msgcontainer=document.querySelector(".msg-container");
let msg= document.querySelector("#msg");
let turnO=true;
let count = 0;
const winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetgame=()=>{
    turnO=true;
    count=0;
    enableBoxes();
    msgcontainer.classList.add("hide");
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText = "O";    
            turnO=false;           
        } else {
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        count++;
        let isWinner= checkWinner();
        if(count==9 && !isWinner){
            gameDraw();
        }
    });
});
const gameDraw = () =>{
    msg.innerText=`Game was a Draw`;
    msgcontainer.classList.remove("hide");
    disableBoxes();         

};
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=` `;
    }
};  
const showWinner=(winner)=>{
    msg.innerText=`Congratulations Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner=()=>{
    for(let pattern of winpattern){
        let pos1value=boxes[pattern[0]].innerText;
        let pos2value=boxes[pattern[1]].innerText;
        let pos3value=boxes[pattern[2]].innerText;
        if(pos1value != "" && pos2value != "" && pos3value != ""){
            if(pos1value==pos2value && pos2value==pos3value){
                showWinner(pos1value);
                return true;
            }
        }  
    }

};
newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);



