function createHeader() {
  const h1 = document.createElement("h1");
  h1.innerHTML = "CAFÉ <br> WOLF";
  const nav = document.createElement("nav");
  nav.setAttribute("id", "navbar");
  const about = document.createElement("a");
  about.classList.add("nav-link");
  about.setAttribute("href", "#about");
  about.innerHTML = "about";
  const menu = document.createElement("a");
  menu.classList.add("nav-link");
  menu.setAttribute("href", "#menu");
  menu.innerHTML = "menu";
  const contact = document.createElement("a");
  contact.classList.add("nav-link");
  contact.setAttribute("href", "#contact");
  contact.innerHTML = "contact";

  nav.appendChild(about);
  nav.appendChild(menu);
  nav.appendChild(contact);

  return { h1, nav };
}

function createMain() {
  const h1 = document.createElement("h1");
  h1.innerHTML = "beisl deluxe";
  const p = document.createElement("p");
  p.innerHTML = `In the year 1931 CAFÉ WOLF opened its doors as a espresso bar for the very first time - <br>
    it was the birth of the espresso culture in the center of Graz.<br> Since then the
    Café has been run by Mr. Wolf sen. & jun.`;

  return { h1, p };
}

function createFooter() {
  const p = document.createElement("p");
  p.innerHTML = "Visit us on social media";

  //FB LINK
  const a_fb = document.createElement("a");
  const img_fb = document.createElement("img");
  img_fb.setAttribute("src", "/src/images/facebook-3-16.png");
  Object.assign(a_fb, {
    href: "",
    className: "profile-link",
    target: "_blank",
  });
  a_fb.appendChild(img_fb);

  //IG LINK
  const a_ig = document.createElement("a");
  const img_ig = document.createElement("img");
  img_ig.setAttribute("src", "/src/images/instagram-16.png");
  Object.assign(a_ig, {
    href: "",
    className: "profile-link",
    target: "_blank",
  });
  a_ig.appendChild(img_ig);

  return { p, a_fb, a_ig };
}

function loadPage() {
  const content = document.getElementById("content");

  //header
  const header_div = document.createElement("div");
  header_div.setAttribute("id", "header");
  const header = createHeader();
  for (const el in header) {
    header_div.appendChild(header[el]);
  }
  content.appendChild(header_div);

  //main
  const main_div = document.createElement("div");
  main_div.setAttribute("id", "main");
  const main = createMain();
  for (const el in main) {
    main_div.appendChild(main[el]);
  }
  content.appendChild(main_div);

  //footer
  const footer_div = document.createElement("div");
  footer_div.setAttribute("id", "footer");
  const footer = createFooter();
  for (const el in footer) {
    footer_div.appendChild(footer[el]);
  }
  content.appendChild(footer_div);
}

export { loadPage };
