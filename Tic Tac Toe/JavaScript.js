let btn = document.querySelectorAll(".box");
let logic = document.querySelector(".logic");

let header = document.querySelector(".header-box");
let startgameButton = document.querySelector("#startgame");
let reset = document.querySelector("#reset");
let messageContainer = document.querySelector(".mess-container");
let newgame = document.querySelector("#newgame");
let winner = document.querySelector("#winner");

let winnerpattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let turn = "O";
let gameover = false;

const resetGame = () => {
  turn = "O";
  gameover = false;
  winner.innerHTML = "";
  btn.forEach((e) => {
    e.innerHTML = "";
  });
};

const StartGame = () => {
  turn = "O";
  gameover = false;
  winner.innerHTML = "";
  header.classList.remove("li");
  logic.classList.remove("hidelogic");
  header.style.display = "none";
  console.log("shruti");
  btn.forEach((e) => {
    e.innerHTML = "";
  });
};

const NewGame = () => {
  turn = "O";
  gameover = false;
  winner.innerHTML = "";
  messageContainer.classList.add("hide");
  header.style.display = "none";
  btn.forEach((e) => {
    e.innerHTML = "";
  });
};

const checkWinner = () => {
  winnerpattern.forEach((e) => {
    if (
      btn[e[0]].innerText === btn[e[1]].innerText &&
      btn[e[1]].innerText === btn[e[2]].innerText &&
      btn[e[0]].innerText != ""
    ) {
      console.log("winner");
      winner.innerHTML = "<h1>Congratulation, Winner is " + turn + " </h1>";

      gameover = true;
      messageContainer.classList.remove("hide");
    }
  });
};
btn.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn == "O" && box.innerHTML == "" && gameover == false) {
      box.innerHTML = turn;
      checkWinner();
      turn = "X";
    } else if (turn == "X" && box.innerHTML == "" && gameover == false) {
      box.innerHTML = turn;

      checkWinner();
      turn = "O";
    } else {
    }
  });
});
startgameButton.addEventListener("click", StartGame);
reset.addEventListener("click", resetGame);
newgame.addEventListener("click", NewGame);
