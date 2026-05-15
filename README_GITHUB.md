# 🛍️ Shopping HUB - E-Commerce Storefront

> একটি সম্পূর্ণ ই-কমার্স স্টোরফ্রন্ট অ্যাডমিন প্যানেল সহ

![Status](https://img.shields.io/badge/status-production-success)
![Build](https://img.shields.io/badge/build-passing-success)
![License](https://img.shields.io/badge/license-MIT-blue)

---

## 🌟 বৈশিষ্ট্য

### 👥 গ্রাহক ফিচার
- ✅ রেসপন্সিভ প্রোডাক্ট গ্রিড (1-4 কলাম)
- ✅ CSS গ্র্যাডিয়েন্ট ইমেজ (8টি ভিন্ন স্টাইল)
- ✅ উইশলিস্ট হার্ট ফাংশন
- ✅ কুইক অ্যাড টু কার্ট
- ✅ 9টি ক্যাটাগরি ফিল্টার
- ✅ প্রোডাক্ট রেটিং এবং রিভিউ
- ✅ ইমেইল কন্টাক্ট ফর্ম

### 👨‍💼 অ্যাডমিন ফিচার
- ✅ ডুয়াল অথেন্টিকেশন (Username + Password)
- ✅ প্রোডাক্ট যোগ করা (Create)
- ✅ প্রোডাক্ট এডিট করা (Update)
- ✅ প্রোডাক্ট মুছা (Delete)
- ✅ ইমেজ আপলোড সিস্টেম
- ✅ দাম এডিটিং
- ✅ প্রোডাক্ট সার্চ
- ✅ সহজ লগআউট

---

## 🚀 দ্রুত শুরু

### প্রি-রিকোয়ারমেন্টস
```
Node.js 16+
npm বা yarn
```

### ইনস্টলেশন
```bash
# রিপোজিটরি ক্লোন করুন
git clone https://github.com/yourusername/shopping-hub.git

# প্রজেক্ট ডিরেক্টরিতে যান
cd shopping-hub

# ডিপেন্ডেন্সি ইনস্টল করুন
npm install

# ডেভেলপমেন্ট সার্ভার চালান
npm run dev
```

### বিল্ড এবং ডিপ্লয়
```bash
# প্রোডাকশন বিল্ড তৈরি করুন
npm run build

# বিল্ড ফাইল (dist/) GitHub Pages বা অন্য হোস্টিং এ আপলোড করুন
```

---

## 🔐 অ্যাডমিন লগইন

```
Username: nishadcorex
Password: webShop320$
```

---

## 📁 প্রজেক্ট স্ট্রাকচার

```
shopping-hub/
├── src/
│   ├── components/
│   │   └── AdminPanel.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── public/
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

---

## 🛠️ প্রযুক্তি স্ট্যাক

- **React 18** - ফ্রন্টএন্ড ফ্রেমওয়ার্ক
- **TypeScript** - টাইপ সেফটি
- **Tailwind CSS** - ইউটিলিটি ফার্স্ট স্টাইলিং
- **Vite** - বিল্ড টুল
- **Lucide React** - আইকন লাইব্রেরি

---

## 📱 রেসপন্সিভ ডিজাইন

- ✅ মোবাইল (< 640px)
- ✅ ট্যাবলেট (640px - 1024px)
- ✅ ডেস্কটপ (> 1024px)
- ✅ XL স্ক্রিন (> 1280px)

---

## 🌐 ডিপ্লয়মেন্ট গাইড

### GitHub Pages এ ডিপ্লয় করুন

#### 1. GitHub Pages সক্রিয় করুন
```
Repository Settings → Pages → Source: Deploy from a branch
Branch: main → Folder: /docs (or root)
```

#### 2. বিল্ড করুন
```bash
npm run build
```

#### 3. dist/ ফোল্ডার আপলোড করুন
```bash
# অথবা
git subtree push --prefix dist origin gh-pages
```

### Vercel এ ডিপ্লয় করুন
```bash
npm install -g vercel
vercel
```

### Netlify এ ডিপ্লয় করুন
```bash
npm install -g netlify-cli
netlify deploy
```

---

## 📊 প্রজেক্ট পরিসংখ্যান

- **Code Lines:** 1200+
- **Components:** 2
- **Documentation:** 10+ files
- **Build Size:** 255 KB (gzipped: 74 KB)
- **Load Time:** < 2 seconds

---

## 📝 লাইসেন্স

MIT License - আপনার ব্যবহারের জন্য মুক্ত

---

## 🤝 অবদান রাখুন

1. রিপোজিটরি ফর্ক করুন
2. আপনার ফিচার ব্রাঞ্চ তৈরি করুন (`git checkout -b feature/AmazingFeature`)
3. আপনার পরিবর্তন কমিট করুন (`git commit -m 'Add some AmazingFeature'`)
4. ব্রাঞ্চ পুশ করুন (`git push origin feature/AmazingFeature`)
5. Pull Request তৈরি করুন

---

## 📞 যোগাযোগ

- **ইমেইল:** nahjani0024@gmail.com
- **প্রজেক্ট লিঙ্ক:** https://github.com/yourusername/shopping-hub

---

## 🎯 ভবিষ্যতের উন্নতি

- [ ] ডেটাবেস ইন্টিগ্রেশন (Firebase/MongoDB)
- [ ] পেমেন্ট গেটওয়ে (Stripe/bKash)
- [ ] ইউজার অ্যাকাউন্ট সিস্টেম
- [ ] অর্ডার ট্র্যাকিং
- [ ] এসএমএস নোটিফিকেশন
- [ ] অ্যানালিটিক্স ড্যাশবোর্ড

---

## ✨ স্ক্রিনশটস

### স্টোরফ্রন্ট
![Storefront](./screenshots/storefront.png)

### অ্যাডমিন প্যানেল
![Admin Panel](./screenshots/admin-panel.png)

---

**Happy Shopping! 🛍️**
