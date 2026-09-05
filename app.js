let boxes = document.querySelectorAll(".box");
let reset_button=document.querySelector("#reset");
let newgame=document.querySelector("#new");
let msg_container=document.querySelector(".msg");
let paramsg=document.querySelector("#msgp");   
let turn0= true;
const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,8],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click", () =>{
        console.log("Box was clicked ");
        if(turn0){
            box.innerText="O";
            turn0=false;
        } else {
            box.innerText="X";
            turn0=true;    
        }
        box.disabled=true;
        checkWinner();
    });
});  

const showWinner = (winner) =>{
    paramsg.innerText = 'Congratulations,Winner is ${Winner}';
    msg_container.classList.remove("hide"); 
};

const checkWinner=()=>{
    for(let pattern of winPattern){
        let pos1value=boxes[pattern[0]].innerText;
        let pos2value=boxes[pattern[1]].innerText;
        let pos3value=boxes[pattern[2]].innerText;
        if(pos1value!="" && pos2value!="" && pos3value!=""){
            if(pos1value===pos2value && pos2value===pos3value){
            console.log("Winner",pos1value);
            showWinner(pos1value);
            }

        }

    }
};