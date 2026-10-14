function curLang(){return document.documentElement.lang||'fr'}
function tr(k){return (I18N[curLang()]||I18N.fr)[k]||k}
function fmtPrice(n){return n.toLocaleString('fr-FR').replace(/\u202f|\u00a0/g,' ')+' '+tr('cur')}
function cardHTML(p){
  const n=String(p.id).padStart(2,'0');
  return `<article class="prop"><div class="prop-img"><img src="assets/img/bien-${n}.svg" alt="${tr('t.'+p.type)} ${p.district}" loading="lazy">${p.tag?`<span class="badge${p.tag==='new'?' alt':''}">${tr('tag.'+p.tag)}</span>`:''}</div>
  <div class="prop-body"><div class="prop-loc"><i class="fa-solid fa-location-dot"></i> ${p.district}, ${tr('c.'+p.city)}</div>
  <h3>${tr('t.'+p.type)} — ${p.district}</h3><p class="prop-desc">${tr('d.'+p.type)}</p>
  <div class="meta"><span><i class="fa-solid fa-bed"></i>${p.rooms} ${tr('p.rooms')}</span><span><i class="fa-solid fa-bath"></i>${p.baths} ${tr('p.baths')}</span><span><i class="fa-solid fa-ruler-combined"></i>${p.area} m²</span></div>
  <div class="tags">${p.x.map(x=>`<span>${tr('x.'+x)}</span>`).join('')}</div>
  <div class="prop-foot"><span class="price">${fmtPrice(p.price)}</span><a href="contact.html">${tr('p.more')}</a></div></div></article>`;
}
function renderCatalog(){
  const f=document.getElementById('featured-grid');
  if(f)f.innerHTML=PROPS.filter(p=>p.feat).slice(0,6).map(cardHTML).join('');
  const g=document.getElementById('catalog-grid');if(!g)return;
  const type=document.getElementById('f-type').value,city=document.getElementById('f-city').value,
    budget=parseInt(document.getElementById('f-budget').value)||0,rooms=parseInt(document.getElementById('f-rooms').value)||0;
  const list=PROPS.filter(p=>(type==='all'||p.type===type)&&(city==='all'||p.city===city)&&(!budget||p.price<=budget)&&(!rooms||p.rooms>=rooms));
  g.innerHTML=list.length?list.map(cardHTML).join(''):`<p class="empty">${tr('none')}</p>`;
  document.getElementById('results-count').textContent=tr('res').replace('{n}',list.length);
}
document.addEventListener('DOMContentLoaded',()=>{
  ['f-type','f-city','f-rooms'].forEach(id=>{const e=document.getElementById(id);e&&e.addEventListener('change',renderCatalog)});
  const b=document.getElementById('f-budget');b&&b.addEventListener('input',renderCatalog);
  const r=document.getElementById('f-reset');r&&r.addEventListener('click',()=>{
    document.getElementById('f-type').value='all';document.getElementById('f-city').value='all';
    document.getElementById('f-budget').value='';document.getElementById('f-rooms').value='';renderCatalog()});
});
