const carrotSound = new Audio("./public/sound/carrot_pull.mp3");
const alertSound = new Audio("./public/sound/alert.wav");
const bgSound = new Audio("./public/sound/bg.mp3");
const bugSound = new Audio("./public/sound/bug_pull.mp3");
const winSound = new Audio("./public/sound/game_win.mp3");
function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}
function stopSound(sound) {
  sound.pause();
}

export function playCarrot() {
  playSound(carrotSound);
}
export function playBug() {
  playSound(bugSound);
}
export function playWin() {
  playSound(winSound);
}
export function playAlert() {
  playSound(alertSound);
}
export function playBackground() {
  stopSound(bgSound);
}
export function stopBackground() {
  stopSound(bgSound);
}
