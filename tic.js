let boxes=document.querySelectorAll(".box");
let restbtn = document.querySelector("#resetbtn");
let newGamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-Container");
let msg = document.querySelector("#msg");
let count = 0 ;
let turno = true;

 const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [6,7,8],
  [3,4,5],
 ];
 const resetGame = () => {
    turno = true;
    count = 0;
    enableBoxes();
    msgcontainer.classList.add("hide");

 }
 boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        
        if (turno){
            box.innerText = "O";
            turno = false;
        } else{
            box.innerText = "X";
            turno = true;
        }
        box.disabled =true;
        count++; 

        let isWinner = checkWinner();
        if (count === 9 && !isWinner){
            gameDraw();
        }
    });
});
const gameDraw = () => {
    msg.innerText = `Game was Draw`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}
const disableBoxes = () =>{
   for( let box of boxes ){
    box.disabled = true;
   }
}
const enableBoxes = () =>{
    for( let box of boxes ){
     box.disabled = false;
     box.innerText="";
    }
 }


const showWinner = (winner) => {
    msg.innerText =`Congragulations,Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val= boxes[pattern[1]].innerText;
        let pos3Val= boxes[pattern[2]].innerText;
       
    if (pos1Val != "" && pos2Val != "" && pos3Val !=""){
        if (pos1Val === pos2Val && pos2Val  === pos3Val ){
            
            showWinner(pos1Val);
            return true;
        };
    }
}
};
newGamebtn.addEventListener("click",resetGame);
restbtn.addEventListener("click",resetGame);


