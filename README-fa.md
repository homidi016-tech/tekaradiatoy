# تکا رادیاتور — استارتر لندینگ (RTL)
این بسته شامل موارد زیر است:
- **index.html**: لندینگ یک‌صفحه‌ای (RTL + فونت Vazirmatn)
- **styles.css**: استایل تمیز با متغیرهای CSS برای تغییر سریع رنگ برند
- **script.js**: منوی موبایل، اسکرول نرم، حالت تیره/روشن با ذخیره در localStorage
- **assets/**: لوگو/فاوآیکن و سه Placeholder برای تصاویر محصول
- **README-fa.md**: همین فایل راهنما

## شخصی‌سازی سریع
- رنگ برند را از `:root{ --brand: #D97706; }` عوض کنید.
- متن‌های بخش‌ها را در `index.html` ویرایش کنید.
- تصاویر واقعی محصولات را بجای `assets/product-1.jpg` و ... آپلود کنید.

## انتشار
### GitHub Pages
1. فایل‌ها را در ریشه‌ی ریپوی گیت‌هاب بریزید.
2. Settings → Pages → Deploy from a branch → Branch: `main` | Folder: `/root` → Save
3. چند دقیقه بعد لینک فعال می‌شود.

### Netlify
- ریپو را متصل کنید یا فولدر را درگ-ادرآپ کنید؛ Build: ندارد (Static)، Publish directory: `/`

### Vercel
- `Add New...` → `Project` → ریپو را وارد کنید؛ Framework: `Other`، Output: `/`

## نکته
- برای فعال شدن فرم تماس، شناسه Formspree خود را در `index.html` جایگزین کنید.
