"use strict";
export const LevelType = Object.freeze({
  h: "상",
  m: "중",
  l: "하",
});
export default class Level {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.level = document.querySelector(".game__level");
    this.level.addEventListener("click", this.onClick);
  }

  setSettingListener(onSetting) {
    this.onSetting = onSetting;
  }

  onClick = (e) => {
    const type = e.target.dataset.type;
    let num;

    if (!type) return;
    switch (type) {
      case LevelType.l:
        num = this.a;
        break;
      case LevelType.m:
        num = this.b;
        break;
      case LevelType.h:
        num = this.c;
        break;
    }

    console.log(type);
    console.log(num);
    this.onSetting(num);
  };

  init() {
    this.level.innerHTML = `
        <button class="game__setting" data-type="${LevelType.l}">${this.a}</button>
        <button class="game__setting" data-type="${LevelType.m}">${this.b}</button>
        <button class="game__setting" data-type="${LevelType.h}">${this.c}</button>
      `;
  }
}
