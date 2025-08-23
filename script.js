
const TELEGRAM_USERNAME = "your_username"; // ← این را با یوزرنیم تلگرام خودتان عوض کنید (بدون @)
const WHATSAPP_NUMBER = "0098XXXXXXXXXX"; // ← شماره واتس‌اپ با کد کشور
const PHONE_NUMBER = "+98XXXXXXXXXX";     // ← شماره تماس

function tgDeepLink(text="سلام، برای سفارش راهنمایی می‌خواستم") {
  const base = `https://t.me/${TELEGRAM_USERNAME}`;
  // برای باز کردن با پیام آماده می‌توانید از t.me/share استفاده کنید
  const share = `https://t.me/share/url?url=${encodeURIComponent(base)}&text=${encodeURIComponent(text)}`;
  return TELEGRAM_USERNAME ? share : "#";
}

function waLink(text="سلام، درباره پکیج‌ها راهنمایی می‌خواستم") {
  const num = WHATSAPP_NUMBER.replace(/[^0-9]/g, "");
  return num ? `https://wa.me/${num}?text=${encodeURIComponent(text)}` : "#";
}

function telLink(){
  return PHONE_NUMBER ? `tel:${PHONE_NUMBER}` : "#";
}

async function loadProducts(){
  const res = await fetch('products.json');
  const items = await res.json();
  const grid = document.getElementById('productGrid');
  items.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card product';
    card.innerHTML = `
      <div class="thumb"><img src="${p.image}" alt="${p.title}"></div>
      <div class="meta">
        ${p.badges.map(b => `<span class="badge">${b}</span>`).join('')}
      </div>
      <div class="title">${p.title}</div>
      <div class="subtitle">${p.subtitle}</div>
      <p class="muted">${p.desc}</p>
      <label class="muted">انتخاب پکیج:</label>
      <select id="opt-${p.id}">
        ${p.options.map(o => `<option value="${o.price}">${o.label} — ${o.price.toLocaleString('fa-IR')} تومان</option>`).join('')}
      </select>
      <div class="price">
        <div><strong>${p.price.toLocaleString('fa-IR')}</strong> <small class="muted">${p.unit || ''}</small></div>
        <div class="actions">
          <a class="btn btn-ghost" href="${tgDeepLink(`سفارش ${p.title} (${p.options[0].label})`)}" target="_blank" rel="noopener">سفارش تلگرام</a>
          <button class="btn btn-primary" data-id="${p.id}">افزودن به سفارش</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  grid.addEventListener('click', (e) => {
    if(e.target.matches('button[data-id]')){
      const id = e.target.getAttribute('data-id');
      const sel = document.getElementById(`opt-${id}`);
      const price = Number(sel.value || 0);
      const label = sel.options[sel.selectedIndex].text;
      const text = `سفارش: ${label} برای ${id}`;
      window.open(tgDeepLink(text), '_blank');
    }
  });
}

function applyContacts(){
  document.getElementById('tgLinkHero').href = tgDeepLink();
  document.getElementById('tgLinkFooter').href = tgDeepLink();
  document.getElementById('waLinkFooter').href = waLink();
  document.getElementById('callLinkFooter').href = telLink();
  document.getElementById('year').textContent = new Date().getFullYear();
}

function themeInit(){
  const root = document.documentElement;
  const saved = localStorage.getItem('theme') || 'dark';
  if(saved === 'light'){ root.classList.add('light'); document.body.classList.add('light'); }
  document.getElementById('themeToggle').addEventListener('click', () => {
    root.classList.toggle('light'); document.body.classList.toggle('light');
    localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
  });
}

window.addEventListener('DOMContentLoaded', () => {
  themeInit();
  applyContacts();
  loadProducts();
});
