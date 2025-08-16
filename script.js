// منوی موبایل، اسکرول نرم، ذخیره حالت تیره/روشن، پیام فرم
(function(){
  const html = document.documentElement;
  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');
  const themeToggle = document.getElementById('themeToggle');
  const form = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMsg');
  const year = document.getElementById('year');

  // سال جاری
  if (year) year.textContent = new Date().getFullYear();

  // منوی موبایل
  if (navToggle && siteNav){
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      siteNav.classList.toggle('show');
    });
  }

  // اسکرول نرم برای لینک‌های داخلی
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id.length > 1){
        const el = document.querySelector(id);
        if (el){
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          siteNav?.classList.remove('show');
        }
      }
    });
  });

  // حالت تیره/روشن با ذخیره در localStorage
  const LS_KEY = 'pref-theme';
  const setTheme = (mode) => {
    if (mode === 'light'){
      html.classList.add('light');
      themeToggle.textContent = '🌞';
    } else {
      html.classList.remove('light');
      themeToggle.textContent = '🌙';
    }
    localStorage.setItem(LS_KEY, mode);
  };
  // مقدار اولیه
  const saved = localStorage.getItem(LS_KEY);
  if (saved) setTheme(saved);
  themeToggle?.addEventListener('click', () => {
    const isLight = html.classList.contains('light');
    setTheme(isLight ? 'dark' : 'light');
  });

  // ارسال فرم (نمایشی - بدون بک‌اند)
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = (data.get('name') || '').toString().trim();
    const message = (data.get('message') || '').toString().trim();
    if (!name || !message){
      formMsg.textContent = 'لطفاً نام و پیام را کامل کنید.';
      return;
    }
    // شبیه‌سازی موفق
    formMsg.textContent = 'پیام شما ثبت شد. به‌زودی با شما تماس می‌گیریم.';
    form.reset();
  });
})();
