import { createHeader } from "./initial_page.js";

const content = document.getElementById("content");

const header_div = document.createElement("div");
header_div.setAttribute("id", "header");
const header = createHeader();

for (const el in header) {
  header_div.appendChild(header[el]);
}

content.appendChild(header_div);
