import { fragment, btnChangeColor, areaText } from "./vars.js";

export { Pallete as PalleteClass };

class Pallete {
  constructor(arrColors, listDOM) {
    this.arrColors = arrColors;
    this.listDOM = listDOM;
  }

  createList() {
    this.arrColors.forEach((color) => {
      let li = document.createElement("li");
      li.dataset.color = color;
      li.style.backgroundColor = color;
      fragment.appendChild(li);
    });
  }

  appendList() {
    this.listDOM.append(fragment);
  }

  toggleList() {
    this.listDOM.closest("#colorsBlock").classList.toggle("is-active");
  }

  changeColor() {
    let colors = this.listDOM.querySelectorAll("li");

    colors.forEach((choosen) => {
      choosen.addEventListener("click", () => {
        areaText.style.color = `${choosen.getAttribute("data-color")}`;
        btnChangeColor.style.backgroundColor = `${choosen.getAttribute(
          "data-color"
        )}`;
      });
    });
  }

  customColor(customColor) {
    btnChangeColor.style.backgroundColor = `${customColor}`;
    areaText.style.color = `${customColor}`;
  }
}
