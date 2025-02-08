let music = new Audio("music.mp3");
let turnSound = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turnFirst = "X";
let isgameover = false;

// Function to change the turn
const changeTurn = () => {
  return turnFirst === "X" ? "O" : "X";
};

// Function to check for a win
const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxtext')
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    win.forEach( e => {
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")){
          document.querySelector('.info').innerText = boxtexts[e[0]].innerText + "Won"
          isgameover = true
          document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "200px"
        }
    })

};

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext"); 
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turnFirst; 
      turnFirst = changeTurn(); 
      turnSound.play(); 
      checkWin();
      if(!isgameover){
        document.getElementsByClassName("info")[0].innerText =
        "Turn for " + turnFirst; 
      }
      
    }
  });
});
