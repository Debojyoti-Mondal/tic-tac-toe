let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-game");
let newGame = document.querySelector("#new-btn");
let msgContaner = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true;


const winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetgame = () =>{
    turn0 = true;
    enablebox();
    msgContaner.classList.add("hide");
 };

boxes.forEach((box) =>{
    box.addEventListener(("click") ,()=>{
          console.log("box was clicked");
          if(turn0){
            box.innerText = "0";
            turn0 = false;
          }
          else {
            box.innerText = "X";
            turn0 = true;
          }
          box.disabled = true;

          checkwinner();
    });
});
 

const disablebox = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enablebox = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
    
};
const showWinner = (winner) =>{
    msg.innerText =`congrachulation winner is ${winner}`;
    msgContaner.classList.remove("hide");
    disablebox();
};

const checkwinner = () =>{
    for(let pattern of winpattern){
       let pos0val = boxes[pattern[0]].innerText ;
       let pos1val = boxes[pattern[1]].innerText ;
       let pos2val = boxes[pattern[2]].innerText ;
    
    if(pos0val != "" && pos1val != "" && pos2val != ""){
        if(pos0val === pos1val && pos1val ===pos2val){
        console.log("winner",pos1val);
        showWinner(pos1val);

    }
   }           
 }
};
newGame.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);