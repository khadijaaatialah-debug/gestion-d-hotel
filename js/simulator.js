function updateSim(){
  const $=id=>document.getElementById(id);if(!$('s-price'))return;
  const price=+$('s-price').value,down=+$('s-down').value,rate=+$('s-rate').value,years=+$('s-years').value;
  const loan=price*(1-down/100),r=rate/100/12,n=years*12;
  const m=r?loan*r/(1-Math.pow(1+r,-n)):loan/n,total=m*n;
  $('v-price').textContent=fmtPrice(price);$('v-down').textContent=down+'% — '+fmtPrice(Math.round(price*down/100));
  $('v-rate').textContent=rate.toFixed(1)+'%';$('v-years').textContent=years+' '+tr('yrs');
  $('sim-monthly').textContent=fmtPrice(Math.round(m));$('sim-amount').textContent=fmtPrice(Math.round(loan));
  $('sim-interest').textContent=fmtPrice(Math.round(total-loan));$('sim-total').textContent=fmtPrice(Math.round(total));
  $('donut-label').textContent=down+'%';$('donut-fg').style.strokeDashoffset=339.3*(1-down/100);
  document.querySelectorAll('[data-sim-lbl]').forEach(e=>e.textContent=tr(e.dataset.simLbl));
}
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.sim-wrap input[type=range]').forEach(i=>i.addEventListener('input',updateSim));updateSim();
});
