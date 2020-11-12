"use strict";
import PopUp from "./popup.js";
import GameBuilder, { Reason } from "./game.js";
import * as sound from "./sound.js";
const gameFinishBanner = new PopUp();
const game = new GameBuilder()
  .withDuration(10)
  .withCarrotCount(10)
  .withBugCount(5)
  .build();

game.setGameStopListener((reason) => {
  let message;
  switch (reason) {
    case Reason.cancel:
      message = "Replay ❣️";
      sound.playAlert();
      break;
    case Reason.win:
      message = "WIN 🔱";
      sound.playWin();
      break;
    case Reason.lose:
      message = "LOSE 💢";
      sound.playBug();
      break;
    default:
      throw new Error("not valid rease");
  }
  gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener(() => {
  game.start();
});
