import { createHeader, createFooter } from "./initial_page.js";

function createMain() {
  const menu = document.createElement("div");
  menu.setAttribute("id", "menu");
  const coffee = document.createElement("div");
  coffee.setAttribute("id", "coffee");
  const coffeeImg = document.createElement("img");
  coffeeImg.classList.add("coffee-img");
  coffeeImg.setAttribute(
    "src",
    "../src/images/pexels-foodie-factor-539432.jpg"
  );
  const h1Coffee = document.createElement("h1");
  h1Coffee.innerHTML =
    "Premium roasted coffee from our private roaster near Graz";
  const h2_coffee = document.createElement("h2");
  h2_coffee.innerHTML = `We got all the classic coffee specialities without any fancy additions that you know from other
  cafés'`;
  coffee.appendChild(coffeeImg);
  coffee.appendChild(h1Coffee);
  coffee.appendChild(h2_coffee);
  menu.appendChild(coffee);

  //FF
  const food = document.createElement("div");
  food.setAttribute("id", "food");
  const itemF = document.createElement("div");
  itemF.classList.add("item");
  const imgF = document.createElement("img");
  imgF.setAttribute("src", "../src/images/frankfurter.jpeg");
  const h1F = document.createElement("h1");
  h1F.innerHTML = "Frankfurter";
  const pF = document.createElement("p");
  pF.innerHTML = "€ 1,50";
  itemF.appendChild(imgF);
  itemF.appendChild(h1F);
  itemF.appendChild(pF);
  //WS
  const imgW = document.createElement("img");
  const itemW = document.createElement("div");
  itemW.classList.add("item");
  imgW.setAttribute("src", "../src/images/wurstsemml.jpeg");
  const h1W = document.createElement("h1");
  h1W.innerHTML = "Wurstsemmel";
  const pW = document.createElement("p");
  pW.innerHTML = "€ 2,--";
  itemW.appendChild(imgW);
  itemW.appendChild(h1W);
  itemW.appendChild(pW);
  //C
  const itemC = document.createElement("div");
  const imgC = document.createElement("img");
  itemC.classList.add("item");
  imgC.setAttribute("src", "../src/images/croissant.jpeg");
  const h1C = document.createElement("h1");
  h1C.innerHTML = "Crossaints";
  const pC = document.createElement("p");
  pC.innerHTML = "€ 1,--";
  itemC.appendChild(imgC);
  itemC.appendChild(h1C);
  itemC.appendChild(pC);

  food.appendChild(itemF);
  food.appendChild(itemW);
  food.appendChild(itemC);

  menu.appendChild(food);

  return { menu };
}

function onlyMainMenu() {
  const main_div = document.createElement("div");
  main_div.setAttribute("id", "main");
  const main = createMain();
  for (const el in main) {
    main_div.appendChild(main[el]);
  }

  return main_div;
}

export { createMain, onlyMainMenu };
