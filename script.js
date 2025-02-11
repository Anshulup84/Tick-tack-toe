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
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    win.forEach( e => {
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")){
          document.querySelector('.info').innerText = boxtexts[e[0]].innerText + "Won"
          isgameover = true
          document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "250px";
          document.querySelector(".line").style.width = "20vw"
          document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
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

// Add onclick listener to reset button

reset.addEventListener('click', ()=> {
  let boxtexts = document.querySelectorAll('.boxtext');
  Array.from(boxtexts).forEach(element => {
    element.innerText = ""
  })
  turnFirst = "X";
  isgameover = false
  document.querySelector(".line").style.width = "0"
  document.getElementsByClassName("info")[0].innerText =
  "Turn for " + turnFirst;
  document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0px"
})


