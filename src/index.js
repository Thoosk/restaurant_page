import { loadPage, onlyMainAbout } from "./initial_page.js";
import { loadPageMenu, onlyMainMenu } from "./menu.js";
import { loadPageContact, onlyMainCont, initMap } from "./contact.js";

window.initMap = initMap;

loadPage();
addListeners();

function changeTab(clickedPage) {
  const content = document.getElementById("content");

  console.log(content.lastElementChild);
  content.firstElementChild.nextElementSibling.remove();

  switch (clickedPage) {
    case "about":
      content.insertBefore(onlyMainAbout(), content.lastElementChild);
      break;
    case "menu":
      content.insertBefore(onlyMainMenu(), content.lastElementChild);
      // content.lastElementChild.insertBefore(onlyMain());
      // onlyMain();
      break;
    case "contact":
      content.insertBefore(onlyMainCont(), content.lastElementChild);
      // loadPageContact();
      initMap();
      break;
  }
  // addListeners();
}

function addListeners() {
  const headerEvent = Array.from(document.querySelectorAll(".nav-link"));

  headerEvent.forEach((e) => {
    e.addEventListener("click", () => {
      //   console.log(e.textContent);
      changeTab(e.textContent);
    });
  });
}
