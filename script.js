// سال فوتر
document.querySelectorAll('#year').forEach(n=>n.textContent = new Date().getFullYear());

// ناوبری موبایل
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
navToggle?.addEventListener('click', () => {
  const isOpen = nav.style.display === 'block';
  nav.style.display = isOpen ? 'none' : 'block';
  navToggle.setAttribute('aria-expanded', (!isOpen).toString());
});

// حالت تیره/روشن با ذخیره در localStorage
const modeToggle = document.getElementById('modeToggle');
if(localStorage.getItem('mode') === 'light'){ document.body.classList.add('light'); }
modeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('light');
  localStorage.setItem('mode', document.body.classList.contains('light') ? 'light' : 'dark');
});

// اسکرول نرم برای لینک‌های داخلی
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const url = new URL(a.href);
    if (location.pathname === url.pathname) {
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if(el){
        e.preventDefault();
        el.scrollIntoView({behavior:'smooth', block:'start'});
        if(window.innerWidth < 600) nav.style.display = 'none';
      }
    }
  });
});
