const parts = [
  {name:"Toyota Hilux Oil Filter", cat:"engine", price:"K250", img:"https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=400"},
  {name:"Front Brake Pads - Corolla", cat:"brakes", price:"K450", img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400"},
  {name:"Shock Absorber - Navara", cat:"suspension", price:"K1200", img:"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=400"},
  {name:"12V Battery 75Ah", cat:"electrical", price:"K1800", img:"https://images.unsplash.com/photo-1551524559-8af4e6624178?q=80&w=400"},
  {name:"Fan Belt - Isuzu", cat:"engine", price:"K350", img:"https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=400"},
  {name:"Brake Disc - Prado", cat:"brakes", price:"K950", img:"https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=400"},
];

const grid = document.getElementById('partsGrid');

function display(list){
  grid.innerHTML = "";
  list.forEach(p=>{
    const wa = `https://wa.me/260977704769?text=Hi Alcon, I want ${encodeURIComponent(p.name)} - ${p.price}`;
    grid.innerHTML += `<div class="part"><img src="${p.img}"><div class="info"><h3>${p.name}</h3><div class="price">${p.price}</div><a href="${wa}" target="_blank" class="btn">Order on WhatsApp</a></div></div>`;
  });
}

function filterParts(cat){
  document.querySelectorAll('.cat-card').forEach(c=>c.classList.remove('active'));
  event.currentTarget.classList.add('active');
  display(parts.filter(p=>p.cat===cat));
}

function searchParts(){
  const q = document.getElementById('search').value.toLowerCase();
  display(parts.filter(p=>p.name.toLowerCase().includes(q)));
}

display(parts); // initial load