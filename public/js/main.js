"use strict";
import PopUp from "./popup.js";
import Field from "./field.js";
import * as sound from "./sound.js";

const CARROT_COUNT = 20;
const BUG_COUNT = 7;
const GAME_DURATION_SEC = 20;
let interval;

const gameBtn = document.querySelector(".game__button");
const gameTimer = document.querySelector(".game__timer");
const gameScore = document.querySelector(".game__score");

let started = false;
let score = 0;
let timer = undefined;

const gameFinishBanner = new PopUp();
const gameField = new Field(CARROT_COUNT, BUG_COUNT);

gameField.setClickListener(onItemClick);
function onItemClick(item) {
  if (!started) {
    return;
  }
  console.log("===>", item);
  if (item === "carrot") {
    score++;
    updateScoreBoard();
    if (score === CARROT_COUNT) {
      finishGame(true);
    }
  } else if (item === "bug") {
    finishGame(false);
  }
}
gameFinishBanner.setClickListener(() => {
  startGame();
});

gameBtn.addEventListener("click", () => {
  if (started) {
    stopGame();
  } else {
    startGame();
  }
});

function stopGame() {
  started = false;
  stopGameTimer();
  hideGameButton();
  gameFinishBanner.showWithText("REPLAY🌟");

  sound.stopBackground();
  sound.playAlert();
  sound.playBackground();
}
function startGame() {
  started = true;
  score = 0;
  initGame();
  showStopButton();
  showTimerAndScore();
  startGameTimer();

  sound.playBackground();
}
function finishGame(win) {
  started = false;
  if (win) {
    sound.playWin();
  } else {
    sound.playBug();
  }
  hideGameButton();
  stopGameTimer();
  gameFinishBanner.showWithText(win ? "YOU WON 🌟" : "YOU LOST 🍌");
  sound.stopBackground();
}
function showStopButton() {
  const icon = document.querySelector(".fas");
  icon.classList.add("fa-stop");
  icon.classList.remove("fa-play");
  gameBtn.style.visibility = "visible";
}
function showTimerAndScore() {
  gameTimer.style.visibility = "visible";
  gameScore.style.visibility = "visible";
}
//⭐️ start
function startGameTimer() {
  let remainingTimeSec = GAME_DURATION_SEC;
  updateTimerText(remainingTimeSec);
  timer = setInterval(() => {
    if (remainingTimeSec <= 0) {
      clearInterval(timer);
      finishGame(CARROT_COUNT === score);
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

//🔥 stop
function stopGameTimer() {
  clearInterval(timer);
}
//🔥 stop
function hideGameButton() {
  gameBtn.style.visibility = "hidden";
}

//TODO: init
function initGame() {
  score = 0;
  gameScore.innerText = CARROT_COUNT;
  gameField.init();
}

function updateScoreBoard() {
  gameScore.innerText = CARROT_COUNT - score;
}
