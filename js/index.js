import { PalleteClass as Pallete } from "./classPalette.js";
import { colors, btnChangeColor, areaText, searchColor } from "./vars.js";

let pallete = new Pallete(colors, document.querySelector("#listColors"));

pallete.createList();
pallete.appendList();
pallete.changeColor();

btnChangeColor.addEventListener("click", () => {
  pallete.toggleList();
});

searchColor.addEventListener("input", function (e) {
  let customColor = this.value;
  pallete.customColor(customColor);
});

areaText.contentEditable = true;
