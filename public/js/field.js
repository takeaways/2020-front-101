"use strict";
import * as sound from "./sound.js";
export default class Field {
  constructor(carrotCount, bugCount) {
    this.carrotCount = carrotCount;
    this.bugCount = bugCount;

    this.field = document.querySelector(".game__field");
    this.fieldRect = this.field.getBoundingClientRect();

    this.field.addEventListener("click", this.onClick);
  }

  init() {
    this.field.innerHTML = "";
    this.#addItem("carrot", this.carrotCount, "./public/images/carrot.png");
    this.#addItem("bug", this.bugCount, "./public/images/bug.png");
  }

  setClickListener(onItemClick) {
    this.onItemClick = onItemClick;
  }

  onClick = (event) => {
    const target = event.target;
    if (target.matches(".carrot")) {
      target.remove();
      sound.playCarrot();
      this.onItemClick && this.onItemClick("carrot");
    } else if (target.matches(".bug")) {
      this.onItemClick("bug");
      this.onItemClick && this.onItemClick("bug");
    }
  };

  #addItem(className, count, imgPath) {
    const x1 = 0;
    const y1 = 0;
    const tempX = this.fieldRect.width;
    const size = (tempX - x1) / 10;
    const x2 = this.fieldRect.width - size;
    const y2 = this.fieldRect.height - size;

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
      this.field.appendChild(item);
    }
  }
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
