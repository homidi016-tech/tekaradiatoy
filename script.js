// سال فوتر
document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());

// ناوبری موبایل (در صورت نیاز می‌تونی بعداً کامل‌تر کنی)
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
navToggle && navToggle.addEventListener('click', () => {
  const isOpen = nav.style.display === 'block';
  nav.style.display = isOpen ? 'none' : 'block';
  navToggle.setAttribute('aria-expanded', (!isOpen).toString());
});

// اسلایدر
const slider = document.getElementById('slider');
if (slider){
  const slides = Array.from(slider.querySelectorAll('.slide'));
  const dotsC = document.getElementById('dots');
  slides.forEach((_,i)=>{ const d=document.createElement('button'); d.className='dot'+(i===0?' active':''); d.setAttribute('aria-label','slide '+(i+1)); d.onclick=()=>go(i,true); dotsC.appendChild(d);});
  const dots = Array.from(dotsC.children);
  let idx=0, timer=null;
  function go(n,manual=false){
    slides[idx].classList.remove('active'); dots[idx].classList.remove('active');
    idx = (n+slides.length)%slides.length;
    slides[idx].classList.add('active'); dots[idx].classList.add('active');
    if(manual){restart();}
  }
  function next(){ go(idx+1); }
  function start(){ timer=setInterval(next, 4000); }
  function stop(){ if(timer){ clearInterval(timer); timer=null; } }
  function restart(){ stop(); start(); }
  start();
  slider.addEventListener('pointerenter', stop);
  slider.addEventListener('pointerleave', start);
}
