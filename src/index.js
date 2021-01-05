import { loadPage, onlyMainAbout } from "./initial_page.js";
import { loadPageMenu, onlyMainMenu } from "./menu.js";
import { loadPageContact, onlyMainCont, initMap } from "./contact.js";

window.initMap = initMap;

loadPage();
addListeners();

function changeTab(clickedPage) {
  const content = document.getElementById("content");

  content.firstElementChild.nextElementSibling.remove();

  switch (clickedPage) {
    case "about":
      content.insertBefore(onlyMainAbout(), content.lastElementChild);
      break;
    case "menu":
      content.insertBefore(onlyMainMenu(), content.lastElementChild);
      break;
    case "contact":
      content.insertBefore(onlyMainCont(), content.lastElementChild);
      initMap();
      break;
  }
}

function addListeners() {
  const headerEvent = Array.from(document.querySelectorAll(".nav-link"));

  headerEvent.forEach((e) => {
    e.addEventListener("click", () => {
      changeTab(e.textContent);
    });
  });
}
