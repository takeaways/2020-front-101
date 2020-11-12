"use strict";
import Level from "./level.js";
import PopUp from "./popup.js";
import GameBuilder, { Reason } from "./game.js";
import * as sound from "./sound.js";
const gameFinishBanner = new PopUp();
const gameLevel = new Level(10, 20, 30);
let game;
gameLevel.setSettingListener((number) => {
  game = new GameBuilder()
    .withDuration(2 * number)
    .withCarrotCount(2 * number)
    .withBugCount(number)
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
});
gameLevel.init();
gameFinishBanner.setClickListener(() => {
  game.start();
});
