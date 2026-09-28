const parts=[
 {name:"Oil Filter - Toyota/Nissan",f:"engine",price:"K180",img:"https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400"},
 {name:"Air Filter Hilux D4D",f:"engine",price:"K350",img:"https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400"},
 {name:"Front Brake Pads",f:"brakes",price:"K550",img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400"},
 {name:"Brake Disc Rotor",f:"brakes",price:"K950",img:"https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400"},
 {name:"Shock Absorber",f:"suspension",price:"K1350",img:"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400"},
 {name:"Engine Oil 5W-30 5L",f:"oils",price:"K650",img:"https://images.unsplash.com/photo-1551524559-8af4e6624178?w=400"},
 {name:"Spark Plug Set",f:"electrical",price:"K320",img:"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400"},
 {name:"Fan Belt",f:"engine",price:"K380",img:"https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400"},
];
const grid=document.getElementById('grid');
const search=document.getElementById('search');
let cur='all';
function draw(){
 const q=search.value.toLowerCase();
 grid.innerHTML='';
 parts.filter(p=>(cur==='all'||p.f===cur)&&p.name.toLowerCase().includes(q)).forEach(p=>{
  const wa=`https://wa.me/260763416129?text=Hello ALCON LUSAKA, I need ${encodeURIComponent(p.name)} ${p.price}`;
  grid.innerHTML+=`<div class="card"><img src="${p.img}"><div class="info"><h4>${p.name}</h4><div class="price">${p.price}</div><a class="btn-order" href="${wa}" target="_blank">Order 0763416129</a></div></div>`;
 });
}
document.querySelectorAll('.filter').forEach(b=>{b.onclick=()=>{document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');cur=b.dataset.f;draw();}});
search.oninput=draw;
draw();