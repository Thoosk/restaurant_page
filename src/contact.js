// Initialize and add the map
function initMap() {
  // The location of Cafe Wolf
  const wolf = { lat: 47.07112332773798, lng: 15.429327495523953 };

  // The map, centered at Cafe Wolf
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: wolf,
  });
  // The marker, positioned at Cafe Wolf
  const marker = new google.maps.Marker({
    position: wolf,
    map: map,
  });
}

function createMain() {
  const contact = document.createElement("div");
  contact.setAttribute("id", "contact");
  const basic = document.createElement("div");
  basic.setAttribute("id", "basic");
  const p1 = document.createElement("p");
  p1.innerHTML = "Café Wolf";
  const p2 = document.createElement("p");
  p2.innerHTML = "Annenstraße 18";
  const p3 = document.createElement("p");
  p3.innerHTML = "A-8020 Graz";
  const p4 = document.createElement("p");
  p4.innerHTML = "You can find the social media aspect at the bottom right";
  basic.appendChild(p1);
  basic.appendChild(p2);
  basic.appendChild(p3);
  basic.appendChild(p4);

  const mapEl = document.createElement("div");
  mapEl.setAttribute("id", "map");

  contact.appendChild(basic);
  contact.appendChild(mapEl);

  return { contact };
}

function onlyMainCont() {
  const main_div = document.createElement("div");
  main_div.setAttribute("id", "main");
  const main = createMain();
  console.log(main);
  for (const el in main) {
    main_div.appendChild(main[el]);
  }

  return main_div;
  // content.appendChild(main_div);
}

export { createMain, initMap, onlyMainCont };
