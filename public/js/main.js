"use strict";
import PopUp from "./popup.js";
import Game from "./game.js";

const gameFinishBanner = new PopUp();

gameFinishBanner.setClickListener(() => {
  game.start();
});

const game = new Game(5, 1, 1);
game.setGameStopListener((reason) => {
  let message;
  switch (reason) {
    case "cancel":
      message = "Replay ❣️";
      break;
    case "win":
      message = "WIN 🔱";
      break;
    case "lose":
      message = "LOSE 💢";
      break;
    default:
      throw new Error("not valid rease");
  }
  gameFinishBanner.showWithText(message);
});
