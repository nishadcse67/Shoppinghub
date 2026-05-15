# ⚡ দ্রুত GitHub এ আপলোড (৫ মিনিটে)

> শুধু ৫টি ধাপে আপনার ওয়েবসাইট লাইভ করুন!

---

## 🎯 ধাপ ১: GitHub অ্যাকাউন্ট তৈরি (১ মিনিট)

```
1. github.com এ যান
2. "Sign up" ক্লিক করুন
3. ইমেইল, username, পাসওয়ার্ড দিন
4. অ্যাকাউন্ট ভেরিফাই করুন
```

---

## 🎯 ধাপ ২: রিপোজিটরি তৈরি (১ মিনিট)

```
1. "+" আইকন → "New repository"
2. Repository name: shopping-hub
3. Public নির্বাচন করুন
4. "Create repository" ক্লিক করুন
```

---

## 🎯 ধাপ ৩: Git ইনস্টল এবং কনফিগার (১ মিনিট)

```bash
# Windows/Mac থেকে ডাউনলোড করুন
https://git-scm.com/download

# টার্মিনালে কনফিগার করুন
git config --global user.name "আপনার নাম"
git config --global user.email "আপনার ইমেইল"
```

---

## 🎯 ধাপ ৪: প্রজেক্ট আপলোড করুন (২ মিনিট)

### টার্মিনাল/Command Prompt খুলুন:
```bash
# প্রজেক্ট ফোল্ডারে যান
cd path/to/shopping-hub

# Git শুরু করুন
git init

# GitHub এ যুক্ত করুন
git remote add origin https://github.com/YOUR_USERNAME/shopping-hub.git

# সব ফাইল যোগ করুন
git add .

# কমিট করুন
git commit -m "Initial commit"

# GitHub এ পুশ করুন
git push -u origin main
```

**⚠️ নোট:** `YOUR_USERNAME` এর জায়গায় আপনার GitHub username দিন

---

## 🎯 ধাপ ৫: GitHub Pages চালু করুন (১ মিনিট)

```
1. রিপোজিটরিতে যান
2. Settings → Pages
3. Source: Deploy from a branch
4. Branch: main
5. Folder: / (root)
6. Save ক্লিক করুন
```

**✅ আপনার ওয়েবসাইট লাইভ!**

```
https://YOUR_USERNAME.github.io/shopping-hub/
```

---

## 🎉 সম্পন্ন!

আপনি এখন করতে পারেন:

✅ ওয়েবসাইট শেয়ার করুন  
✅ বন্ধুদের দেখান  
✅ নতুন ফিচার যোগ করুন  
✅ আপডেট পুশ করুন  

---

## 🔄 আপডেট আপলোড করুন

```bash
# কোড এডিট করুন
# তারপর:
git add .
git commit -m "আপনার পরিবর্তন"
git push origin main
```

**২ মিনিটের মধ্যে আপডেট লাইভ হবে!**

---

## ❓ সমস্যা হলে

### পুশ করতে পারছি না:
```
Username এবং password চাইলে:
- Username: আপনার GitHub username
- Password: GitHub Personal Access Token
```

### 404 এরর দেখাচ্ছে:
```
৫-১০ মিনিট অপেক্ষা করুন
GitHub Pages চালু হতে সময় লাগে
```

### কোথাও আটকে গেছে:
```
DEPLOYMENT_GUIDE.md পড়ুন (বিস্তারিত গাইড)
```

---

## 🎯 দ্রুত রিফারেন্স

```bash
# প্রথমবার
git init
git remote add origin YOUR_GITHUB_URL
git add .
git commit -m "Initial commit"
git push -u origin main

# পরবর্তীবার
git add .
git commit -m "Update"
git push
```

---

**শুভকামনা! 🚀**
