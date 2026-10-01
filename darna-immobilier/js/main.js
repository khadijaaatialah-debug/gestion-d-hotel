function setLang(l){
  const d=I18N[l]||I18N.fr;document.documentElement.lang=l;document.documentElement.dir=l==='ar'?'rtl':'ltr';
  document.body.classList.toggle('rtl',l==='ar');
  document.querySelectorAll('[data-i18n]').forEach(e=>{const v=d[e.dataset.i18n];if(v!==undefined)e.textContent=v});
  document.querySelectorAll('[data-i18n-ph]').forEach(e=>e.placeholder=d[e.dataset.i18nPh]||'');
  document.querySelectorAll('.lang-switch button').forEach(b=>b.classList.toggle('on',b.dataset.lang===l));
  try{localStorage.setItem('darna-lang',l)}catch(e){}
  if(window.renderCatalog)renderCatalog();if(window.updateSim)updateSim();
}
document.addEventListener('DOMContentLoaded',()=>{
  let l='fr';try{l=localStorage.getItem('darna-lang')||'fr'}catch(e){}
  document.querySelectorAll('.lang-switch button').forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang)));
  const bg=document.querySelector('.burger'),nl=document.querySelector('.nav-links');
  bg&&bg.addEventListener('click',()=>nl.classList.toggle('open'));
  document.querySelectorAll('.js-year').forEach(e=>e.textContent=new Date().getFullYear());
  setLang(l);
  const io='IntersectionObserver' in window?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1}):null;
  document.querySelectorAll('.reveal').forEach(e=>io?io.observe(e):e.classList.add('in'));
});
