const products = [
  // ENGINE - 4 pics
  { id: 1, name: "Air Filter - DYNAMICAL", category: "engine", image: "images/engine/engine_1.jpg", whatsapp: "Hi Alcon, I need engine_1 Air Filter" },
  { id: 2, name: "Air & Oil Filters Set", category: "engine", image: "images/engine/engine_2.jpg", whatsapp: "Hi Alcon, I need engine_2 Filters" },
  { id: 3, name: "Oil Filter 15607-1780", category: "engine", image: "images/engine/engine_3.jpg", whatsapp: "Hi Alcon, I need engine_3 Oil Filter" },
  { id: 4, name: "Air Cleaner Housing Assembly", category: "engine", image: "images/engine/engine_4.jpg", whatsapp: "Hi Alcon, I need engine_4 Housing" },

  // BRAKES - 2 pics
  { id: 5, name: "KRATEX Brake Pads Superior", category: "brakes", image: "images/brakes/brakes_1.jpg", whatsapp: "Hi Alcon, I need brakes_1 KRATEX Pads" },
  { id: 6, name: "Brake Pad Set - Ceramic", category: "brakes", image: "images/brakes/brakes_2.jpg", whatsapp: "Hi Alcon, I need brakes_2 Pads" },

  // SUSPENSION - 4 pics
  { id: 7, name: "Suspension Shock / Mount", category: "suspension", image: "images/suspension/suspension_1.jpg", whatsapp: "Hi Alcon, I need suspension_1" },
  { id: 8, name: "Wheel Hub Assembly", category: "suspension", image: "images/suspension/suspension_2.jpg", whatsapp: "Hi Alcon, I need suspension_2" },
  { id: 9, name: "Brake Disc / Hub", category: "suspension", image: "images/suspension/suspension_3.jpg", whatsapp: "Hi Alcon, I need suspension_3" },
  { id: 10, name: "LION Wheel Bearing Kit", category: "suspension", image: "images/suspension/suspension_4.jpg", whatsapp: "Hi Alcon, I need suspension_4 LION" },

  // OILS - 1 pic
  { id: 11, name: "Shell HELIX HX5 15W-40 5L", category: "oils", image: "images/oils/oils_1.jpg", whatsapp: "Hi Alcon, I need oils_1 Shell Helix 5L" }
];

const grid = document.getElementById("grid");
const searchInput = document.getElementById("search");
const filterButtons = document.querySelectorAll(".filter");

function renderProducts(list) {
  grid.innerHTML = "";
  list.forEach(p => {
    grid.innerHTML += `
      <div class="product" data-category="${p.category}">
        <img src="${p.image}" alt="${p.name}" style="width:100%; height:220px; object-fit:cover; border-radius:8px;">
        <h3 style="margin:10px 0;">${p.name}</h3>
        <a href="https://wa.me/260763416129?text=${encodeURIComponent(p.whatsapp)}" target="_blank" style="background:#25D366; color:white; padding:10px; display:block; text-align:center; border-radius:5px; text-decoration:none;">Order 0763416129</a>
      </div>
    `;
  });
}

// Initial load
renderProducts(products);

// Filter
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const f = btn.getAttribute("data-f");
    if (f === "all") renderProducts(products);
    else renderProducts(products.filter(p => p.category === f));
  });
});

// Search
searchInput?.addEventListener("input", (e) => {
  const q = e.target.value.toLowerCase();
  renderProducts(products.filter(p => p.name.toLowerCase().includes(q)));
});