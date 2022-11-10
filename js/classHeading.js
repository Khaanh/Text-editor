import { heading, fragment, headingList } from "./vars.js";

class Heading {
  constructor() {}

  static createList(number = 5) {
    if (number <= 6) {
      for (let i = 0; i < number; i++) {
        let li = document.createElement("li");
        li.textContent = `h${i + 1}`;
        li.dataset.h = `h${i + 1}`;
        fragment.append(li);
      }
      headingList.appendChild(fragment);
    } else {
      Heading.createList(6);
    }
  }

  show() {}
}

Heading.createList(6);
