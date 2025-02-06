let music = new Audio("music.mp3")
let turn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turnFirst = "X"

//Function to change the turn
const changeTurn = () => {
    return turnFirst === "X"?"0": "X"
}

//Function to check for a win
const checkWin = () => {

}

// Game Logic
let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element => {
    let boxtext = document.querySelector('.boxtext')

})