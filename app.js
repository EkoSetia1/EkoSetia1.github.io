const player1 = document.querySelector("#player-1");
const player2 = document.querySelector("#player-2");
const reset = document.querySelector("#reset");
const tambahScoreP1 = document.querySelector("#tambah-score-p1");
const tambahScoreP2 = document.querySelector("#tambah-score-p2");
const pointvalue = document.querySelector("#pointvalue");

let winPoint = pointvalue.value;
let isGameover = false;

pointvalue.addEventListener("change", function () {
  winPoint = parseInt(pointvalue.value);
  player1.textContent = 0;
  player2.textContent = 0;
  isGameover = false;
});

tambahScoreP1.addEventListener("click", function () {
  if (!isGameover) {
    player1.textContent = parseInt(player1.textContent) + 1;
    if (player1.textContent == winPoint) {
      isGameover = true;
    }
  }
});

tambahScoreP2.addEventListener("click", function () {
  if (!isGameover) {
    player2.textContent = parseInt(player2.textContent) + 1;
    if (player2.textContent == winPoint) {
      isGameover = true;
    }
  }
});

reset.addEventListener("click", function () {
  player1.textContent = 0;
  player2.textContent = 0;
  isGameover = false;
});
