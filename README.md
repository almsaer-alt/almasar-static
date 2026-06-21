# المسار الذكي للنقل العام — موقع ثابت

موقع ثابت (Static) مبني بـ **Vite + React + Tailwind CSS**، جاهز للنشر على GitHub Pages.

---

## 🚀 خطوات النشر على GitHub Pages

### 1. أضف الشعار
ضع ملف الشعار في مجلد `public/` باسم `logo.png`

### 2. ارفع المشروع على GitHub
```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO_NAME.git
git push -u origin main
```

### 3. فعّل GitHub Pages
- افتح الـ repo على GitHub
- اذهب لـ **Settings → Pages**
- في **Source** اختر: **GitHub Actions**
- احفظ — سيشتغل الـ workflow تلقائياً

### 4. إذا الموقع في مجلد فرعي (مثل `/almasar/`)
افتح `vite.config.ts` وعدّل:
```ts
base: "/almasar/",
```

---

## 💻 التشغيل المحلي

```bash
npm install
npm run dev
```

## 🏗️ البناء

```bash
npm run build
```

الملفات الجاهزة تطلع في مجلد `dist/`
