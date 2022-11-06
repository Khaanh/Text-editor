document.addEventListener("DOMContentLoaded", () => {
  listColors.append(fragment);

  listColors.querySelectorAll("li").forEach((item) => {
    // item.addEventListener("mouseover", () => {
    //   item.style.border = `2px solid #fff`;
    // });
    // item.addEventListener("mouseleave", () => {
    //   item.style.border = ``;
    // });

    item.addEventListener("click", () => {
      btnChooseColor.style.backgroundColor = item.getAttribute("data-color");
    });
  });
});

let listColors = document.querySelector("#listColors");
let fragment = new DocumentFragment();
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

colors.forEach((color) => {
  let items = document.createElement("li");
  items.dataset.color = color;
  items.style.backgroundColor = `${color}`;
  fragment.appendChild(items);
});

let btnChooseColor = document.querySelector("#btnChooseColor");
let colorsBlock = document.querySelector("#colorsBlock");

btnChooseColor.addEventListener("click", () => {
  colorsBlock.classList.toggle("is-active");
});
