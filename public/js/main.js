"use strict";
import PopUp from "./popup.js";
import GameBuilder from "./game.js";

const gameFinishBanner = new PopUp();
const game = new GameBuilder()
  .withDuration(10)
  .withCarrotCount(10)
  .withBugCount(5)
  .build();

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

gameFinishBanner.setClickListener(() => {
  game.start();
});
