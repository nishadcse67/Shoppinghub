# 🚀 GitHub এ আপলোড এবং ওয়েবসাইট প্রকাশ করার গাইড

> এই গাইড আপনাকে আপনার Shopping HUB ওয়েবসাইট GitHub এ আপলোড এবং প্রকাশ করতে সাহায্য করবে।

---

## 📋 প্রি-রিকোয়ারমেন্টস

1. **GitHub অ্যাকাউন্ট** - [github.com](https://github.com) এ সাইন আপ করুন
2. **Git ইনস্টল** - [git-scm.com](https://git-scm.com) থেকে ইনস্টল করুন
3. **VS Code বা টার্মিনাল** - কোড এডিট করার জন্য

---

## 🎯 ধাপ ১: প্রজেক্ট প্রস্তুত করুন

### 1.1 সব ফাইল চেক করুন
```
আপনার প্রজেক্ট ফোল্ডারে নিচের ফাইলগুলো থাকা উচিত:
✅ .gitignore (তৈরি করা হয়েছে)
✅ README_GITHUB.md (তৈরি করা হয়েছে)
✅ src/ ফোল্ডার
✅ package.json
✅ index.html
✅ সব ডকুমেন্টেশন ফাইল
```

### 1.2 প্রোডাকশন বিল্ড তৈরি করুন
```bash
# টার্মিনালে যান
cd shopping-hub

# বিল্ড করুন
npm run build

# বিল্ড সফল হলে dist/ ফোল্ডার তৈরি হবে
```

---

## 🎯 ধাপ ২: GitHub রিপোজিটরি তৈরি করুন

### 2.1 GitHub এ নতুন রিপোজিটরি তৈরি করুন
```
1. github.com এ যান
2. "+" আইকন ক্লিক করুন → "New repository"
3. Repository name: "shopping-hub"
4. Description: "E-Commerce Storefront with Admin Panel"
5. Public বা Private নির্বাচন করুন
6. "Initialize with README" চেক করুন না
7. "Create repository" ক্লিক করুন
```

### 2.2 রিপোজিটরি URL নোট করুন
```
আপনার রিপোজিটরি URL এরকম হবে:
https://github.com/yourusername/shopping-hub.git
```

---

## 🎯 ধাপ ৩: লোকাল রিপোজিটরি ইনিশিয়ালাইজ করুন

### 3.1 টার্মিনালে যান
```bash
# প্রজেক্ট ফোল্ডারে যান
cd path/to/shopping-hub

# Git ইনিশিয়ালাইজ করুন
git init

# মূল ব্রাঞ্চ তৈরি করুন
git branch -M main
```

### 3.2 GitHub এ যুক্ত করুন
```bash
# আপনার রিপোজিটরি URL যোগ করুন
git remote add origin https://github.com/yourusername/shopping-hub.git

# ব্রাঞ্চ চেক করুন
git branch -M main
```

### 3.3 সব ফাইল যোগ করুন
```bash
# সব ফাইল স্টেজ করুন
git add .

# কমিট করুন
git commit -m "Initial commit: Shopping HUB e-commerce storefront"
```

### 3.4 GitHub এ পুশ করুন
```bash
# GitHub এ আপলোড করুন
git push -u origin main
```

---

## 🎯 ধাপ ৪: GitHub Pages চালু করুন

### 4.1 Settings এ যান
```
1. আপনার রিপোজিটরিতে যান
2. "Settings" ট্যাব ক্লিক করুন
3. বাম মেনু থেকে "Pages" ক্লিক করুন
```

### 4.2 GitHub Pages কনফিগার করুন
```
Source:
  Deploy from a branch
  Branch: main
  Folder: / (root)
  Click "Save"
```

### 4.3 অপেক্ষা করুন
```
GitHub Pages চালু হতে ২-৫ মিনিট সময় লাগবে
আপনার ওয়েবসাইট লাইভ হবে:
https://yourusername.github.io/shopping-hub/
```

---

## 🎯 ধাপ ৫: GitHub Actions দিয়ে অটোমেটিক ডিপ্লয়মেন্ট

### 5.1 Workflow ফাইল যোগ করুন
```bash
# যদি না থাকে, তৈরি করুন
mkdir .github/workflows
# deploy.yml ফাইল যোগ করা হয়েছে
```

### 5.2 GitHub Actions চালান
```
1. আপনার রিপোজিটরিতে যান
2. "Actions" ট্যাব ক্লিক করুন
3. "Deploy to GitHub Pages" workflow দেখুন
4. "Run workflow" ক্লিক করুন
```

### 5.3 ডিপ্লয়মেন্ট চেক করুন
```
Workflow সম্পন্ন হলে:
- Pages URL দেখুন
- আপনার ওয়েবসাইট লাইভ হবে
```

---

## 🎯 ধাপ ৬: কাস্টম ডোমেইন (অপশনাল)

### 6.1 ডোমেইন কিনুন
```
- Namecheap
- GoDaddy
- Google Domains
```

### 6.2 DNS কনফিগার করুন
```
CNAME রেকর্ড যোগ করুন:
Name: www
Value: yourusername.github.io

অথবা
A রেকর্ড যোগ করুন:
@ → 185.199.108.153
@ → 185.199.109.153
@ → 185.199.110.153
@ → 185.199.111.153
```

### 6.3 GitHub Settings এ যোগ করুন
```
Settings → Pages → Custom domain
ডোমেইন নাম লিখুন
"Save" ক্লিক করুন
```

---

## 🎯 ধাপ ৭: আপডেট আপলোড করুন

### 7.1 কোড পরিবর্তন করুন
```bash
# আপনার কোড এডিট করুন
# VS Code বা অন্য এডিটর ব্যবহার করুন
```

### 7.2 পরিবর্তন পুশ করুন
```bash
# পরিবর্তন যোগ করুন
git add .

# কমিট করুন
git commit -m "Update: আপনার পরিবর্তনের বিবরণ"

# GitHub এ পুশ করুন
git push origin main
```

### 7.3 GitHub Pages আপডেট হবে
```
GitHub Pages অটোমেটিক আপডেট হবে
১-২ মিনিট অপেক্ষা করুন
```

---

## 🎯 বিকল্প: Vercel দিয়ে ডিপ্লয়মেন্ট

### 7.1 Vercel এ ডিপ্লয় করুন
```bash
# Vercel CLI ইনস্টল করুন
npm install -g vercel

# ডিপ্লয় করুন
vercel

# প্রোডাকশন ডিপ্লয়
vercel --prod
```

### 7.2 Vercel ড্যাশবোর্ড
```
1. vercel.com এ যান
2. GitHub অ্যাকাউন্ট কানেক্ট করুন
3. রিপোজিটরি সিলেক্ট করুন
4. Deploy ক্লিক করুন
```

---

## 🎯 বিকল্প: Netlify দিয়ে ডিপ্লয়মেন্ট

### 7.1 Netlify ড্র্যাগ অ্যান্ড ড্রপ
```
1. netlify.com এ যান
2. "Drop your site folder here" এ dist/ ফোল্ডার ড্র্যাগ করুন
3. ওয়েবসাইট লাইভ হবে
```

### 7.2 Netlify CLI
```bash
# ইনস্টল করুন
npm install -g netlify-cli

# ডিপ্লয় করুন
netlify deploy --prod
```

---

## 🐛 সমস্যা সমাধান

### সমস্যা ১: পুশ করতে পারছি না
```
সমাধান:
git remote -v
# রিমোট URL চেক করুন

git remote set-url origin https://github.com/yourusername/shopping-hub.git
git push -u origin main
```

### সমস্যা ২: GitHub Pages লোড হচ্ছে না
```
সমাধান:
1. Settings → Pages চেক করুন
2. Branch: main
3. Folder: / (root)
4. ৫-১০ মিনিট অপেক্ষা করুন
```

### সমস্যা ৩: GitHub Actions ব্যর্থ হচ্ছে
```
সমাধান:
1. Actions ট্যাব চেক করুন
2. Error লগ দেখুন
3. package.json চেক করুন
4. npm run build লোকালি রান করুন
```

### সমস্যা ৪: 404 এরর দেখাচ্ছে
```
সমাধান:
1. dist/ ফোল্ডারে index.html আছে কি চেক করুন
2. GitHub Pages সক্রিয় আছে কি চেক করুন
3. URL সঠিক আছে কি চেক করুন
```

---

## ✅ চেকলিস্ট

```
প্রজেক্ট প্রস্তুত:
☐ .gitignore আছে
☐ README_GITHUB.md আছে
☐ সব ফাইল আছে
☐ npm run build সফল

GitHub সেটআপ:
☐ রিপোজিটরি তৈরি
☐ git init করা
☐ git remote add করা
☐ git push করা

GitHub Pages:
☐ Settings → Pages এ গিয়েছি
☐ Branch: main নির্বাচন
☐ Folder: / নির্বাচন
☐ Save করা
☐ URL চেক করা

অপশনাল:
☐ কাস্টম ডোমেইন যোগ করা
☐ Vercel/Netlify ব্যবহার করা
```

---

## 🎉 আপনার ওয়েবসাইট লাইভ!

আপনার Shopping HUB এখন লাইভ:

```
GitHub Pages:
https://yourusername.github.io/shopping-hub/

Vercel:
https://shopping-hub.vercel.app/

Netlify:
https://your-site-name.netlify.app/
```

---

## 📚 পরবর্তী ধাপ

১. **কাস্টম ডোমেইন** কিনুন
২. **HTTPS** সক্ষম করুন
৩. **SEO** অপ্টিমাইজ করুন
৪. **Analytics** যোগ করুন
৫. **নিয়মিত আপডেট** করুন

---

## 🎯 দ্রুত রিফারেন্স

```bash
# নতুন প্রজেক্ট
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_GITHUB_URL
git push -u origin main

# আপডেট
git add .
git commit -m "Update description"
git push origin main
```

---

**শুভকামনা! আপনার ওয়েবসাইট এখন লাইভ! 🚀**
