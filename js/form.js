document.addEventListener('DOMContentLoaded',()=>{
  const f=document.getElementById('contact-form');if(!f)return;
  f.addEventListener('submit',e=>{e.preventDefault();document.getElementById('form-note').classList.add('show');f.reset()});
});
