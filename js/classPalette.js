// vars
let colors = [
  "#1abc9c",
  "#2ecc71",
  "#3498db",
  "#9b59b6",
  "#34495e",
  "#16a085",
  "#27ae60",
  "#2980b9",
  "#8e44ad",
  "#2c3e50",
  "#f1c40f",
  "#e67e22",
  "#e74c3c",
  "#ecf0f1",
  "#95a5a6",
  "#f39c12",
  "#d35400",
  "#c0392b",
  "#bdc3c7",
  "#7f8c8d",
];
let fragment = new DocumentFragment();
let btn = document.querySelector("#btnChooseColor");
let areaText = document.querySelector("#areaText");
let searchColor = document.querySelector("#searchColor");

// areaText.contentEditable = true;

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

  chooseColor() {
    let colors = this.listDOM.querySelectorAll("li");

    colors.forEach((choosen) => {
      choosen.addEventListener("click", () => {
        areaText.style.color = `${choosen.getAttribute("data-color")}`;
      });
    });
  }

  searchColor() {
    let colors = this.listDOM.querySelectorAll("li");

    colors.forEach((color) => {
      color.style.opacity = 0;
    });
  }
}

let pallete = new Pallete(colors, document.querySelector("#listColors"));

pallete.createList();
pallete.appendList();
pallete.chooseColor();

btn.addEventListener("click", () => {
  pallete.toggleList();
});

searchColor.addEventListener("input", function (e) {
  if (this.value.length > 0) {
    pallete.searchColor();
  }
});