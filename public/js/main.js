"use strict";

const CARROT_COUNT = 5;
const BUG_COUNT = 5;
const GAME_DURATION_SEC = 5;
let interval;

const field = document.querySelector(".game__field");
const fieldRect = field.getBoundingClientRect();
const gameBtn = document.querySelector(".game__button");
const gameTimer = document.querySelector(".game__timer");
const gameScore = document.querySelector(".game__score");

let started = false;
let score = 0;
let timer = undefined;

gameBtn.addEventListener("click", () => {
  if (started) {
    stopGame();
  } else {
    startGame();
  }
  started = !started;
});

function stopGame() {}
function startGame() {
  initGame();
  showStopButton();
  showTimerAndScore();
  startGameTimer();
}
function showStopButton() {
  const icon = document.querySelector(".fa-play");
  icon.classList.add("fa-stop");
  icon.classList.remove("fa-play");
}
function showTimerAndScore() {
  gameTimer.style.visibility = "visible";
  gameScore.style.visibility = "visible";
}
function startGameTimer() {
  let remainingTimeSec = GAME_DURATION_SEC;
  updateTimerText(remainingTimeSec);
  timer = setInterval(() => {
    if (remainingTimeSec <= 0) {
      clearInterval(timer);
      return;
    }
    updateTimerText(--remainingTimeSec);
  }, 1000);
}
function updateTimerText(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  gameTimer.innerText = `${minutes} : ${seconds}`;
}

//TODO: init
function initGame() {
  field.innerHTML = "";
  gameScore.innerText = CARROT_COUNT;
  addItem("carrot", CARROT_COUNT, "/public/images/carrot.png");
  addItem("carrot", BUG_COUNT, "/public/images/bug.png");
}

function addItem(className, count, imgPath) {
  const x1 = 0;
  const y1 = 0;
  const tempX = fieldRect.width;
  const size = (tempX - x1) / 20;
  const x2 = fieldRect.width - size;
  const y2 = fieldRect.height - size;

  for (let i = 0; i < count; i++) {
    const item = document.createElement("img");
    item.setAttribute("class", className);
    item.setAttribute("src", imgPath);
    item.style.position = "absolute";
    item.style.width = `${size}px`;
    item.style.height = `${size}px`;

    const x = randomNumber(x1, x2);
    const y = randomNumber(y1, y2);
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
    field.appendChild(item);
  }
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
